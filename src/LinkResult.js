import React, { useEffect, useState } from "react";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  console.log(inputValue);
  const [shortenLink, setshortenLink] = useState("");
  // console.log(shortenLink);
  const [copied, setCopied] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  const fetchdata = async () => {
    try {
      setloading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setshortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setloading(false);
    }
  };


  useEffect(() => {
    if (inputValue.length) {
      fetchdata();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }

  if (error) {
    return <p className="noData">Something is Wrong :( </p>;
  }

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>
              Copy to Clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
