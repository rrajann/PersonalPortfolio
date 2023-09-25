
export default function readJson(path) {
    const response = fetch(path);
    const data = response.json();
    return data;
}