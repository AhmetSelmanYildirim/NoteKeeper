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

[![Image](https://i.hizliresim.com/57zj1zf.png)](https://hizliresim.com/57zj1zf)
[![Image](https://i.hizliresim.com/iyckunq.png)](https://hizliresim.com/iyckunq)
