"""Read the BJJ Heroes RSS feed and keep the last valid edition on failure."""
import datetime as dt
import html
import json
from pathlib import Path
from urllib.parse import urlsplit
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime

output = Path(__file__).resolve().parents[1] / "data" / "circuit-news.json"
request = Request("https://www.bjjheroes.com/feed", headers={"User-Agent": "IvanLealJJ/1.0 (RSS reader)"})
with urlopen(request, timeout=30) as response:
    root = ET.fromstring(response.read(2_000_001))

items = {}
for entry in root.findall("./channel/item"):
    link = (entry.findtext("link") or "").strip()
    url = urlsplit(link)
    title = html.unescape(entry.findtext("title") or "").strip()
    if url.scheme != "https" or url.netloc not in {"bjjheroes.com", "www.bjjheroes.com"} or not title:
        continue
    try:
        published = parsedate_to_datetime(entry.findtext("pubDate") or "").astimezone(dt.timezone.utc)
    except (ValueError, TypeError, OverflowError):
        continue
    if published <= dt.datetime.now(dt.timezone.utc):
        items[link] = {"title": title, "href": link, "date": published.date().isoformat()}

if not items:
    raise SystemExit("O feed não trouxe matérias válidas. Edição anterior preservada.")
edition = sorted(items.values(), key=lambda item: item["date"], reverse=True)[:4]
output.write_text(json.dumps(edition, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
