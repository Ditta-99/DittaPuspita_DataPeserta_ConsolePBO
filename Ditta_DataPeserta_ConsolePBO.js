class Nilai {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
        this._nilai = 0; 
    }

    
    getGrade() {
        const nilai = this._nilai;
        let grade = "";

        // Logika penentuan Grade
        if (nilai >= 90 && nilai <= 100) {
            grade = "A (Sangat Baik)";
        }
        else if (nilai >= 80 && nilai <= 89) {
            grade = "B (Baik)";
        }
        else if (nilai >= 70 && nilai <= 79) {
            grade = "C (Cukup)";
        }
        else if (nilai >= 60 && nilai <= 69) {
            grade = "D (Kurang)";
        }
        else if (nilai < 60 && nilai >= 0) { 
             grade = "E (Tidak Lulus)";
        }
        else {
             grade = "Nilai Invalid (Di luar 0-100)";
        }
        
        return grade;
    }

    // Getter untuk mendapatkan nilai
    get nilaiPeserta() {
        return this._nilai;
    }

    // Setter untuk mengatur nilai dengan validasi
    set nilaiPeserta(x) {
        if (typeof x === "number" && x >= 0 && x <= 100) {
            this._nilai = x; 
        } else {
             console.error(` Nilai ${x} tidak valid. Nilai harus angka antara 0 dan 100.`);
        }
    }
}

// ----------------------------------------------------------------------

class Programweb extends Nilai {
    constructor(nama, umur, jurusan) {
        super(nama, umur);
        this.jurusan = jurusan;
    }
    
    // Method untuk menampilkan informasi secara VERTICAL
    getInfo() {
        const grade = this.getGrade();
        console.log(
            // Menggunakan '\n' untuk membuat baris baru
            `\n--- HASIL PESERTA PROGRAM WEB ---\n` +
            `Nama    : ${this.nama}\n` + 
            `Umur    : ${this.umur} tahun\n` +
            `Jurusan : ${this.jurusan}\n` +
            `Nilai   : ${this._nilai}\n` + 
            `Grade   : ${grade}`
        );
    }
}

// ----------------------------------------------------------------------

class ProgramDesign extends Nilai {
    constructor(nama, umur, jurusan) {
        super(nama, umur);
        this.jurusan = jurusan;
    }

    // Method untuk menampilkan informasi secara VERTICAL
    getInfo() {
        const grade = this.getGrade();
        console.log(
            // Menggunakan '\n' untuk membuat baris baru
            `\n--- HASIL PESERTA PROGRAM DESIGN ---\n` +
            `Nama    : ${this.nama}\n` + 
            `Umur    : ${this.umur} tahun\n` +
            `Jurusan : ${this.jurusan}\n` +
            `Nilai   : ${this._nilai}\n` + 
            `Grade   : ${grade}`
        );
    }
}

// ----------------------------------------------------------------------



// 1. Peserta Web1
let programweb1 = new Programweb("Rifqi Pratama", 20, "Full Stack Developer");
programweb1.nilaiPeserta = 95; 

// 2. Peserta Design 1
let design1 = new ProgramDesign("Siti Khadijah", 22, "RPL");
design1.nilaiPeserta = 72; 

// 3. Peserta Web2
let programweb2 = new Programweb("Jono Susanto", 35, "Backend Developer");
programweb2.nilaiPeserta = 58; 

// 4. Peserta Design 2
let design2 = new ProgramDesign("Rani", 23, "Multimedia");
design2.nilaiPeserta = 1500000; // Output 0 karna masuk ke default nilai

// ----------------------------------------------------------------------


programweb1.getInfo();
design1.getInfo();
programweb2.getInfo();
design2.getInfo();