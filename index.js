import axios from "axios";

export default async function chromeExtensionDownloads(extensionUrl) {
  try {
    const response = await axios.get(extensionUrl);
    const idx = response.data.indexOf(`e-f-ih" title="`) + 15;
    let downloads = "";
    for (let i = idx; i < idx + 10; i++) {
      if (response.data[i] === "+" || response.data[i] === " ") break;
      downloads += response.data[i];
    }
    downloads = "+" + downloads;
    return downloads;
  } catch (error) {
    console.error("Error:", error.message);
  }
}
