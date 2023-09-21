<?php
session_start();

// Veritabanı bağlantısı
$serverName = "localhost";
$username = "root";
$password = "";
$dbname = "t3vakfi";

// Veritabanına bağlantı oluşturma
$conn = new mysqli($serverName, $username, $password, $dbname);

// Bağlantı hatasını kontrol etme
if ($conn->connect_error) {
    die("Bağlantı hatası: " . $conn->connect_error);
}

// Formdan gelen verileri alın
$Saat = isset($_POST['saat']) ? $_POST['saat'] : null;
$Konum = $_POST['konum'];
$ikramlik = $_POST['ikramlikDurum'];
$cay = $_POST['cayDurum'];
$kahve = $_POST['kahveDurum'];
$sogukIcecek = $_POST['sogukDurum'];
$gelenDamacana = $_POST['gelenDamacana'];
$talepEdilenDamacana = $_POST['talepEdilenDamacana'];
$doluDamacana = $_POST['doluDamacana'];
$bosDamacana = $_POST['bosDamacana'];
$kontrolBilgilendirme = $_POST['optradio'];

// SQL sorgusunu oluşturun ve verileri tabloya ekleyin
$sql = "INSERT INTO gorevli (saat, konum, ikramlik, cay, kahve, sogukIcecek, garsonSayisi, gelenDamacana, talepEdilenDamacana, doluDamacana, bosDamacana, kontrolBilgilendirme) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("isssssiiiis", $Saat, $Konum, $ikramlik, $cay, $kahve, $sogukIcecek $gelenDamacana, $talepEdilenDamacana, $doluDamacana, $bosDamacana, $kontrolBilgilendirme);


// Bağlantıyı kapatın
$stmt->close();
?>