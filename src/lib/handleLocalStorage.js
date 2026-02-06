export function saveToLocalStorage(values) {
    const pullData = JSON.parse(localStorage.getItem("data"))
    const dataToSave = []

    if(!pullData) {
        const newValues = {...values, id: 1}
        dataToSave.push(newValues);
        localStorage.setItem("data", JSON.stringify(dataToSave));
        alert("Konten pertama berhasil diposting")
        return
    }
    const newValues = {...values, id: pullData.length + 1}
    dataToSave.push(newValues, ...pullData);
    localStorage.setItem("data", JSON.stringify(dataToSave));
    alert("Konten berhasil diposting.");
}