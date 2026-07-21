# Hostel photos

These are your real photos, self-hosted directly in the repo (instead of
hotlinking from Google Maps, which kept breaking). Current files in use:

| File                  | Used on                                  |
|------------------------|-------------------------------------------|
| exterior.jpg           | Homepage hero, About page                 |
| room-standard.jpg      | Standard Room card (home + Rooms page)    |
| room-premium.jpg       | Premium Room card (home + Rooms page)     |
| room-executive.jpg     | Executive Suite card (home + Rooms page)  |
| room-extra.jpg         | Gallery — "Comfortable Rooms"             |
| common-area.jpg        | About page, Gallery                       |
| tv-lounge.jpg          | Gallery — "TV Lounge"                     |
| dining.jpg             | About page, Gallery                       |
| study.jpg              | Gallery — "Study Area"                    |
| washroom.jpg           | Gallery — "Washroom"                      |
| street.jpg, window.jpg | Not used yet — spare shots if you want to add more later |

## To swap or add a photo later

1. Drop the new photo into this `images/` folder.
2. In the relevant `.html` file, find the `<img src="images/...">` tag you
   want to change and point it at your new filename.
3. Commit and push — Vercel redeploys automatically.
