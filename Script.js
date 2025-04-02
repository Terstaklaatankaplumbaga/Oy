// Başlangıçta gösterilecek materyaller
const materials = [
    { name: "Ağaç", health: 100 },
    { name: "Taş", health: 150 },
    { name: "Meyve", health: 50 }
];

// Silah seçim fonksiyonu
let selectedWeapon = "cekic";

function selectWeapon(weapon) {
    selectedWeapon = weapon;
    alert(`${weapon} seçildi!`);
}

// Materyal oluşturma
function createMaterial() {
    const material = materials[Math.floor(Math.random() * materials.length)];
    const materialElement = document.createElement("div");
    materialElement.classList.add("material");
    materialElement.innerText = `${material.name} - Can: ${material.health}`;
    
    document.getElementById("materials").appendChild(materialElement);
}

// 5 saniyede bir yeni materyal oluştur
setInterval(createMaterial, 5000);
