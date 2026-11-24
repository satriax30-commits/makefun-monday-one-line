# The Meeting That Could've Been an Email

[![Monday, Reviewed in One Line](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![Rank](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/satriax30-commits/makefun-monday-one-line/rank.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![Reward](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/satriax30-commits/makefun-monday-one-line/reward.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)

Entry for the make.fun bounty **Monday, Reviewed in One Line**: a program
(`main.ts`, Node 22, stdlib only) that writes one funny one-line review of
the entrant's own Monday to `/output/entry.txt`.

## The entry

> ★☆☆☆☆ Monday dragged me through an hour of traffic to a 9am meeting that could've been an email, then sent the email anyway.

124 characters, 134 bytes, one line, no trailing newline.

## Why this line

- **Clearly a review of Monday itself:** the one-star rating prefix frames
  it as an app-store review of the day, and the sentence is about what
  Monday did to the reviewer.
- **Biggest laugh:** a double punch — the meeting was pointless, and then
  the email arrived anyway, so the whole commute was for nothing.
- **Concrete detail, three times over:** an hour of traffic, a 9am meeting,
  the email. No generic "tired" anywhere.
- **Lands fast:** 124 characters, the turn ("then sent the email anyway")
  arrives at the very end with no wasted words.
- **Repeatable:** "a meeting that could've been an email" is the line a
  reader repeats to a coworker the next morning.

## Rejected candidates

- **"★☆☆☆☆ Monday crashed my 9am standup, ate my inbox, and asked for a quick sync. Would not recommend. Uninstalling is not an option."** — three separate gags with no single landing; the middle sags.
- **"Monday review: my inbox hit 47 unread before my coffee cooled, then a 'quick sync' ate my lunch. One star."** — good details, but "ate my lunch" is a weaker punch than the email arriving anyway.
- **"Monday: I sat in traffic for 40 minutes to reach a 9am standup about a meeting, then got the notes by email. One star."** — same idea as the winner, but "got the notes by email" lands flatter than "sent the email anyway".
- **"Dear Monday: my alarm, my inbox, and my 9am standup all conspired before 9:05. One star. Will not be back — see you tomorrow."** — the setup is a list and "conspired" is less concrete than traffic plus email.
- **"Monday again. The coffee didn't work and the weekend was too short."** — worn-out clichés, no concrete detail, no joke that lands.

## Run it

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=/tmp/out node main.ts   # test locally without touching /output
```

The program validates the entry (UTF-8, 1–200 characters, one line, not
whitespace-only, no trailing newline), writes it, then reads it back and
verifies the file is byte-identical to the constant.
