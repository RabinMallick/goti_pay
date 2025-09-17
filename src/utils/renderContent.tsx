import React from "react";

export const renderContent = (text: string) => {
  const highlightText = "GotiPay Ltd.";
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // Step 1: Highlight "GotiPay Ltd."
  let parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  const highlightRegex = new RegExp(highlightText, "g");
  let match;
  while ((match = highlightRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <span key={match.index} className="bg-yellow-50 font-semibold px-1">
        {highlightText}
      </span>
    );
    lastIndex = match.index + highlightText.length;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  // Step 2: Convert emails and URLs to clickable links
  return parts.map((part, idx) => {
    if (typeof part === "string") {
      let subParts: (string | React.ReactElement)[] = [];
      let last = 0;
      const combinedRegex = new RegExp(`${emailRegex.source}|${urlRegex.source}`, "g");
      let m;
      while ((m = combinedRegex.exec(part)) !== null) {
        if (m.index > last) subParts.push(part.substring(last, m.index));

        const matchedText = m[0];
        if (emailRegex.test(matchedText)) {
          subParts.push(
            <a
              key={idx + m.index}
              href={`mailto:${matchedText}`}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {matchedText}
            </a>
          );
        } else if (urlRegex.test(matchedText)) {
          subParts.push(
            <a
              key={idx + m.index}
              href={matchedText}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              {matchedText}
            </a>
          );
        }
        last = m.index + matchedText.length;
      }
      if (last < part.length) subParts.push(part.substring(last));
      return <React.Fragment key={idx}>{subParts}</React.Fragment>;
    }
    return part;
  });
};
