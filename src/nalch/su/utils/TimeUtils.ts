export function formatTimeAgoNumber(date: number) {
  return formatTimeAgoDate(new Date(date));
}

export function formatTimeAgoDate(date: Date) {
  const now = new Date();
  const diffInSeconds = Math.round((now.getTime() - date.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, "seconds");
  } else if (diffInSeconds < 60 * 60) {
    return rtf.format(-Math.round(diffInSeconds / 60), "minutes");
  } else if (diffInSeconds < 60 * 60 * 24) {
    return rtf.format(-Math.round(diffInSeconds / (60 * 60)), "hours");
  } else if (diffInSeconds < 60 * 60 * 24 * 7) {
    return rtf.format(-Math.round(diffInSeconds / (60 * 60 * 24)), "days");
  } else if (diffInSeconds < 60 * 60 * 24 * 30) {
    return rtf.format(-Math.round(diffInSeconds / (60 * 60 * 24 * 7)), "weeks");
  } else if (diffInSeconds < 60 * 60 * 24 * 365) {
    return rtf.format(
      -Math.round(diffInSeconds / (60 * 60 * 24 * 30)),
      "months"
    );
  } else {
    return rtf.format(
      -Math.round(diffInSeconds / (60 * 60 * 24 * 365)),
      "years"
    );
  }
}
