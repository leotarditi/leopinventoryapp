import { Product } from "@/model/product.model";

export const products: Product[] = [
  {
    sku: "SKU001",
    name: "iPhone 14 Pro",
    description:
      "Smartphone con pantalla OLED de 6.1 pulgadas; chip A16 Bionic; cámara de 48 MP",
    image: "/products/1.webp",
    category: {
      id: "c1",
      name: "Smartphones",
    },
    brand: "Apple",
    price: 999.99,
    stock: 30,
    specifications: [
      { name: "Pantalla", value: "6.1 pulgadas OLED" },
      { name: "Cámara", value: "48 MP" },
      { name: "Chip", value: "A16 Bionic" },
    ],
  },
  {
    sku: "SKU002",
    name: "Samsung Galaxy S22 Ultra",
    description:
      "Smartphone con cámara de 108 MP; pantalla Dynamic AMOLED 2X de 6.8 pulgadas",
    image: "/products/2.webp",
    category: {
      id: "c1",
      name: "Smartphones",
    },
    brand: "Samsung",
    price: 1099.99,
    stock: 25,
    specifications: [
      { name: "Pantalla", value: "6.8 pulgadas Dynamic AMOLED 2X" },
      { name: "Cámara", value: "108 MP" },
      { name: "Batería", value: "5000 mAh" },
    ],
  },
  {
    sku: "SKU003",
    name: "Samsung Galaxy Tab S8",
    description:
      "Tablet Samsung con pantalla de 11 pulgadas; procesador Snapdragon 8 Gen 1 y S Pen incluido",
    image: "/products/3.webp",
    category: {
      id: "c2",
      name: "Tablets",
    },
    brand: "Samsung",
    price: 699.99,
    stock: 20,
    specifications: [
      { name: "Pantalla", value: "11 pulgadas TFT" },
      { name: "Procesador", value: "Snapdragon 8 Gen 1" },
      { name: "Almacenamiento", value: "128 GB" },
    ],
  },
  {
    sku: "SKU004",
    name: "iPhone 13",
    description:
      "Smartphone con pantalla OLED de 6.1 pulgadas; chip A15 Bionic; cámara de 12 MP",
    image: "/products/4.webp",
    category: {
      id: "c1",
      name: "Smartphones",
    },
    brand: "Apple",
    price: 799.99,
    stock: 40,
    specifications: [
      { name: "Pantalla", value: "6.1 pulgadas OLED" },
      { name: "Cámara", value: "12 MP" },
      { name: "Chip", value: "A15 Bionic" },
    ],
  },
  {
    sku: "SKU005",
    name: "Samsung Galaxy Book Pro 360",
    description:
      "Notebook Samsung de 13.3 pulgadas; procesador Intel i7; 16 GB de RAM",
    image: "/products/5.webp",
    category: {
      id: "c3",
      name: "Laptops",
    },
    brand: "Samsung",
    price: 1299.99,
    stock: 15,
    specifications: [
      { name: "Pantalla", value: "13.3 pulgadas AMOLED" },
      { name: "Procesador", value: "Intel i7" },
      { name: "RAM", value: "16 GB" },
    ],
  },
  {
    sku: "SKU006",
    name: "Samsung Galaxy Buds Pro",
    description:
      "Auriculares inalámbricos con cancelación de ruido activa; sonido Dolby Atmos",
    image: "/products/6.webp",
    category: {
      id: "c4",
      name: "Auriculares",
    },
    brand: "Samsung",
    price: 199.99,
    stock: 50,
    specifications: [
      { name: "Cancelación de ruido", value: "Sí" },
      { name: "Conectividad", value: "Bluetooth" },
      { name: "Sonido", value: "Dolby Atmos" },
    ],
  },
  {
    sku: "SKU007",
    name: "Celular Genérico 4G",
    description:
      "Celular básico con pantalla de 6 pulgadas; cámara de 8 MP; batería de 4000 mAh",
    image: "/products/7.webp",
    category: {
      id: "c1",
      name: "Smartphones",
    },
    brand: "Genérico",
    price: 99.99,
    stock: 100,
    specifications: [
      { name: "Pantalla", value: "6 pulgadas HD" },
      { name: "Cámara", value: "8 MP" },
      { name: "Batería", value: "4000 mAh" },
    ],
  },
  {
    sku: "SKU008",
    name: "Apple iPad 10.2",
    description:
      "Tablet Apple con pantalla Retina de 10.2 pulgadas; procesador A13 Bionic",
    image: "/products/8.webp",
    category: {
      id: "c2",
      name: "Tablets",
    },
    brand: "Apple",
    price: 329.99,
    stock: 45,
    specifications: [
      { name: "Pantalla", value: "10.2 pulgadas Retina" },
      { name: "Procesador", value: "A13 Bionic" },
      { name: "Almacenamiento", value: "64 GB" },
    ],
  },
  {
    sku: "SKU009",
    name: "Apple MacBook Air M2",
    description:
      "Laptop Apple con chip M2; pantalla Retina de 13.6 pulgadas; 8 GB de RAM",
    image: "/products/9.webp",
    category: {
      id: "c3",
      name: "Laptops",
    },
    brand: "Apple",
    price: 1199.99,
    stock: 20,
    specifications: [
      { name: "Pantalla", value: "13.6 pulgadas Retina" },
      { name: "Chip", value: "M2" },
      { name: "RAM", value: "8 GB" },
    ],
  },
  {
    sku: "SKU010",
    name: "Samsung Galaxy Book Pro",
    description:
      "Notebook Samsung de 15.6 pulgadas; procesador Intel i7; 8 GB de RAM",
    image: "/products/10.webp",
    category: {
      id: "c3",
      name: "Laptops",
    },
    brand: "Samsung",
    price: 1099.99,
    stock: 10,
    specifications: [
      { name: "Pantalla", value: "15.6 pulgadas AMOLED" },
      { name: "Procesador", value: "Intel i7" },
      { name: "RAM", value: "8 GB" },
    ],
  },
  {
    sku: "SKU011",
    name: "iPhone 14",
    description:
      "Smartphone con pantalla OLED de 6.1 pulgadas; chip A15 Bionic; cámara de 12 MP",
    image: "/products/1.webp",
    category: {
      id: "c1",
      name: "Smartphones",
    },
    brand: "Apple",
    price: 899.99,
    stock: 35,
    specifications: [
      {
        name: "Pantalla",
        value: "6.1 pulgadas OLED",
      },
      {
        name: "Cámara",
        value: "12 MP",
      },
      {
        name: "Chip",
        value: "A15 Bionic",
      },
    ],
  },
  {
    sku: "SKU012",
    name: "Samsung Galaxy Note 20 Ultra",
    description:
      "Smartphone con pantalla Dynamic AMOLED 2X de 6.9 pulgadas; cámara de 108 MP",
    image: "/products/2.webp",
    category: {
      id: "c1",
      name: "Smartphones",
    },
    brand: "Samsung",
    price: 1199.99,
    stock: 18,
    specifications: [
      {
        name: "Pantalla",
        value: "6.9 pulgadas Dynamic AMOLED 2X",
      },
      {
        name: "Cámara",
        value: "108 MP",
      },
    ],
  },
  {
    sku: "SKU013",
    name: "Samsung Galaxy Tab S7+",
    description:
      "Tablet Samsung con pantalla de 12.4 pulgadas; procesador Snapdragon 865+",
    image: "/products/3.webp",
    category: {
      id: "c2",
      name: "Tablets",
    },
    brand: "Samsung",
    price: 849.99,
    stock: 22,
    specifications: [
      {
        name: "Pantalla",
        value: "12.4 pulgadas AMOLED",
      },
      {
        name: "Procesador",
        value: "Snapdragon 865+",
      },
    ],
  },
  {
    sku: "SKU014",
    name: "iPhone SE 2020",
    description:
      "Smartphone con pantalla LCD de 4.7 pulgadas; chip A13 Bionic; cámara de 12 MP",
    image: "/products/4.webp",
    category: {
      id: "c1",
      name: "Smartphones",
    },
    brand: "Apple",
    price: 399.99,
    stock: 50,
    specifications: [
      {
        name: "Pantalla",
        value: "4.7 pulgadas LCD",
      },
      {
        name: "Cámara",
        value: "12 MP",
      },
      {
        name: "Chip",
        value: "A13 Bionic",
      },
    ],
  },
  {
    sku: "SKU015",
    name: "Dell XPS 13",
    description:
      "Laptop Dell de 13.4 pulgadas; procesador Intel i7; 8 GB de RAM",
    image: "/products/5.webp",
    category: {
      id: "c3",
      name: "Laptops",
    },
    brand: "Dell",
    price: 1399.99,
    stock: 12,
    specifications: [
      {
        name: "Pantalla",
        value: "13.4 pulgadas FHD",
      },
      {
        name: "Procesador",
        value: "Intel i7",
      },
      {
        name: "RAM",
        value: "8 GB",
      },
    ],
  },
  {
    sku: "SKU016",
    name: "Bose QuietComfort 35 II",
    description:
      "Auriculares inalámbricos con cancelación de ruido activa y Bluetooth",
    image: "/products/6.webp",
    category: {
      id: "c4",
      name: "Auriculares",
    },
    brand: "Bose",
    price: 299.99,
    stock: 45,
    specifications: [
      {
        name: "Cancelación de ruido",
        value: "Sí",
      },
      {
        name: "Conectividad",
        value: "Bluetooth",
      },
    ],
  },
  {
    sku: "SKU017",
    name: "Huawei P30 Lite",
    description: "Smartphone con pantalla de 6.15 pulgadas; cámara de 24 MP",
    image: "/products/7.webp",
    category: {
      id: "c1",
      name: "Smartphones",
    },
    brand: "Huawei",
    price: 249.99,
    stock: 80,
    specifications: [
      {
        name: "Pantalla",
        value: "6.15 pulgadas FHD",
      },
      {
        name: "Cámara",
        value: "24 MP",
      },
    ],
  },
  {
    sku: "SKU018",
    name: "Microsoft Surface Go 2",
    description:
      "Tablet con pantalla de 10.5 pulgadas; procesador Intel Pentium Gold",
    image: "/products/8.webp",
    category: {
      id: "c2",
      name: "Tablets",
    },
    brand: "Microsoft",
    price: 399.99,
    stock: 30,
    specifications: [
      {
        name: "Pantalla",
        value: "10.5 pulgadas PixelSense",
      },
      {
        name: "Procesador",
        value: "Intel Pentium Gold",
      },
    ],
  },
  {
    sku: "SKU019",
    name: "Lenovo ThinkPad X1 Carbon",
    description:
      "Laptop Lenovo con pantalla de 14 pulgadas; procesador Intel i5; 16 GB de RAM",
    image: "/products/9.webp",
    category: {
      id: "c3",
      name: "Laptops",
    },
    brand: "Lenovo",
    price: 1799.99,
    stock: 10,
    specifications: [
      {
        name: "Pantalla",
        value: "14 pulgadas FHD",
      },
      {
        name: "Procesador",
        value: "Intel i5",
      },
      {
        name: "RAM",
        value: "16 GB",
      },
    ],
  },
  {
    sku: "SKU020",
    name: "Acer Swift 3",
    description: "Laptop Acer de 14 pulgadas; procesador Intel i5; 8 GB de RAM",
    image: "/products/10.webp",
    category: {
      id: "c3",
      name: "Laptops",
    },
    brand: "Acer",
    price: 799.99,
    stock: 60,
    specifications: [
      {
        name: "Pantalla",
        value: "14 pulgadas FHD",
      },
      {
        name: "Procesador",
        value: "Intel i5",
      },
      {
        name: "RAM",
        value: "8 GB",
      },
    ],
  },
];
