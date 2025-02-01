# Note Keeper

## Temel Özellikler

Electron ve React ile geliştirilmiş masaüstü not tutma uygulamasıdır.

Kullanıcının not girmesi için bir text input vardır. Girilen metin "Kaydet" butonuna basıldığında, not listesine eklenir.

Her not yanında "Sil" butonu vardır. Tıklandığında ilgili notu siler.

Vite ile oluşturulmuştur.

## 🚀 Kurulum

1.Projenin indirilmesi ve bağımlılıkların kurulması

```bash
  git clone https://github.com/AhmetSelmanYildirim/NoteKeeper.git
  cd NoteKeeper/
  yarn install
```

**Önemli Not:** development ortamı için **_.env_** oluşturulup `NODE_ENV=development` environment i eklenmelidir.

2.1.Development ortamının çalıştırılması

```bash
  yarn dev
  yarn start
```

2.2.Concurrently modülü ile development ortamının çalıştırılması **(Opsiyonel)**

```bash
  yarn add concurrently
  yarn dev

  package.json a aşağıdaki script komutu eklenmelidir.
  "scripts": {
    "dev": "concurrently \"vite\" \"electron .\"",
  },
```

**Önemli Not:** Build almadan önce `NODE_ENV` değiştirilmeli veya kaldırılmalıd.r.

3.Production ortamında çalıştırılması

```bash
  yarn build
  yarn start
```

## Üçüncü Taraf Kütüphaneler

vite, electron, react, electron-store, dotenv, tailwindcss

## Teknolojiler

Electron, React, ContextAPI, TailwindCSS

## Screenshots

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/AhmetSelmanYildirim/NoteKeeper/blob/main/public/Entry.png" width="45%" />
  <img src="https://github.com/AhmetSelmanYildirim/NoteKeeper/blob/main/public/Notes.png" width="45%" />
</div>
