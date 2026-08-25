let language = "en";

if (typeof window !== "undefined") {
  const host = window.location.hostname.toLowerCase();

  if (host.endsWith(".de")) {
    language = "de";
  } else if (host.endsWith(".in")) {
    language = "hi";
  } else if (host.endsWith(".tr")) {
    language = "tr";
  } else if (host.endsWith(".uk")) {
    language = "en";
  } else {
    language = "en";
  }
}

export default language;