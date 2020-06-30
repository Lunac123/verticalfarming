const productData = [
  {
    id: 1,
    title: "Red Mustard",
    description: "Description for Red mustard",
    img: "src/img/products/redmustard.jpg",
    delivery: {
      target: "delivery",
      showHide: false,
      info: "Delivery time varies depending on where you live (2-5 days)"
    },
    nutrients: {
      showHide: false,
      target: "nutrients",
      info:
        "Näringsvärde per 100 g energi 1621 kJ / 391 kcal fett 32 g varav mättat fett 20 g kolhydrat 0 g varav sockerarter 0 g protein 25 g salt 1.4 g kalcium 739 mg (92.0%*) *% av DRI, Dagligt Referensintag"
    },
    detailedDescription: {
      showHide: true,
      target: "detaileddescription",
      info:
        "Ullamco quis culpa ad excepteur ex laborum quis. Incididunt occaecat officia deserunt esse voluptate esse occaecat consequat do. Laboris consectetur nostrud veniam excepteur anim nisi exercitation officia amet nostrud minim sint. Pariatur enim sunt magna magna veniam sint. Cupidatat sint consectetur aliquip ex eiusmod. Exercitation cupidatat sunt adipisicing consectetur laboris non velit consequat proident non excepteur aute aliqua aliquip. Eu in sunt minim pariatur excepteur ipsum ad cillum mollit occaecat fugiat ipsum."
    },

    slug: "red-mustard"
  },
  {
    id: 2,
    title: "Basil",
    description: "Description for Basil",
    img: "src/img/products/basil.jpg",
    delivery: {
      target: "delivery",
      showHide: false,
      info: "Delivery time varies depending on where you live (2-5 days)"
    },
    nutrients: {
      showHide: false,
      target: "nutrients",
      info:
        "Näringsvärde per 100 g energi 1621 kJ / 391 kcal fett 32 g varav mättat fett 20 g kolhydrat 0 g varav sockerarter 0 g protein 25 g salt 1.4 g kalcium 739 mg (92.0%*) *% av DRI, Dagligt Referensintag"
    },
    detailedDescription: {
      showHide: true,
      target: "detaileddescription",
      info:
        "Ullamco quis culpa ad excepteur ex laborum quis. Incididunt occaecat officia deserunt esse voluptate esse occaecat consequat do. Laboris consectetur nostrud veniam excepteur anim nisi exercitation officia amet nostrud minim sint. Pariatur enim sunt magna magna veniam sint. Cupidatat sint consectetur aliquip ex eiusmod. Exercitation cupidatat sunt adipisicing consectetur laboris non velit consequat proident non excepteur aute aliqua aliquip. Eu in sunt minim pariatur excepteur ipsum ad cillum mollit occaecat fugiat ipsum."
    },
    slug: "basil"
  },
  {
    id: 3,
    title: "Radish Cress",
    description: "Description for Radish Cress",
    img: "src/img/products/radish_cress.jpg",
    delivery: {
      target: "delivery",
      showHide: false,
      info: "Delivery time varies depending on where you live (2-5 days)"
    },
    nutrients: {
      showHide: false,
      target: "nutrients",
      info:
        "Näringsvärde per 100 g energi 1621 kJ / 391 kcal fett 32 g varav mättat fett 20 g kolhydrat 0 g varav sockerarter 0 g protein 25 g salt 1.4 g kalcium 739 mg (92.0%*) *% av DRI, Dagligt Referensintag"
    },
    detailedDescription: {
      showHide: true,
      target: "detaileddescription",
      info:
        "Ullamco quis culpa ad excepteur ex laborum quis. Incididunt occaecat officia deserunt esse voluptate esse occaecat consequat do. Laboris consectetur nostrud veniam excepteur anim nisi exercitation officia amet nostrud minim sint. Pariatur enim sunt magna magna veniam sint. Cupidatat sint consectetur aliquip ex eiusmod. Exercitation cupidatat sunt adipisicing consectetur laboris non velit consequat proident non excepteur aute aliqua aliquip. Eu in sunt minim pariatur excepteur ipsum ad cillum mollit occaecat fugiat ipsum."
    },
    slug: "radish-cress"
  },
  {
    id: 4,
    title: "Spicy Mustard",
    description: "Description for Spicy Mustard",
    img: "src/img/products/spicymustard.jpg",
    delivery: {
      target: "delivery",
      showHide: false,
      info: "Delivery time varies depending on where you live (2-5 days)"
    },
    nutrients: {
      showHide: false,
      target: "nutrients",
      info:
        "Näringsvärde per 100 g energi 1621 kJ / 391 kcal fett 32 g varav mättat fett 20 g kolhydrat 0 g varav sockerarter 0 g protein 25 g salt 1.4 g kalcium 739 mg (92.0%*) *% av DRI, Dagligt Referensintag"
    },
    detailedDescription: {
      showHide: true,
      target: "detaileddescription",
      info:
        "Ullamco quis culpa ad excepteur ex laborum quis. Incididunt occaecat officia deserunt esse voluptate esse occaecat consequat do. Laboris consectetur nostrud veniam excepteur anim nisi exercitation officia amet nostrud minim sint. Pariatur enim sunt magna magna veniam sint. Cupidatat sint consectetur aliquip ex eiusmod. Exercitation cupidatat sunt adipisicing consectetur laboris non velit consequat proident non excepteur aute aliqua aliquip. Eu in sunt minim pariatur excepteur ipsum ad cillum mollit occaecat fugiat ipsum."
    },
    slug: "spicy-mustard"
  },
  {
    id: 5,
    title: "Mix",
    description:
      "Description for Mix of Kale, cabbage, radish cress and wheat grass",
    img: "src/img/products/kale-cabbage-radishcress-wheatgrass-mix.jpg",
    delivery: {
      target: "delivery",
      showHide: false,
      info: "Delivery time varies depending on where you live (2-5 days)"
    },
    nutrients: {
      showHide: false,
      target: "nutrients",
      info:
        "Näringsvärde per 100 g energi 1621 kJ / 391 kcal fett 32 g varav mättat fett 20 g kolhydrat 0 g varav sockerarter 0 g protein 25 g salt 1.4 g kalcium 739 mg (92.0%*) *% av DRI, Dagligt Referensintag"
    },
    detailedDescription: {
      showHide: true,
      target: "detaileddescription",
      info:
        "Ullamco quis culpa ad excepteur ex laborum quis. Incididunt occaecat officia deserunt esse voluptate esse occaecat consequat do. Laboris consectetur nostrud veniam excepteur anim nisi exercitation officia amet nostrud minim sint. Pariatur enim sunt magna magna veniam sint. Cupidatat sint consectetur aliquip ex eiusmod. Exercitation cupidatat sunt adipisicing consectetur laboris non velit consequat proident non excepteur aute aliqua aliquip. Eu in sunt minim pariatur excepteur ipsum ad cillum mollit occaecat fugiat ipsum."
    },
    slug: "mix"
  }
];

export default productData;
