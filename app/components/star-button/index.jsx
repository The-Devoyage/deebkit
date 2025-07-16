'use client'

import { useState, useEffect } from "react";

export const StarButton = () => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/The-Devoyage/deeb")
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .catch(() => setStars(null));
  }, []);

  return (
    <a
      className="btn btn-primary"
      href="https://github.com/The-Devoyage/deeb"
      target="_blank"
      rel="noopener noreferrer"
    >
      ⭐ Star on GitHub {stars !== null && `(${stars})`}
    </a>
  )

}
