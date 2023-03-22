export default function setBodyColor({ color, fontColor, colorHeader, shadow }) {
    document.body.style.setProperty('--background', color);
    document.body.style.setProperty('--backgroundHeader', colorHeader);
    document.body.style.setProperty('--fontColor', fontColor);
    document.body.style.setProperty('--shadow', shadow);
}