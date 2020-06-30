const productData = [
  {
    id: 1,
    title: "Red Mustard",
    shortDesc: "Description for Red mustard",
    longDescription:
      "Laboris nisi nulla qui enim. Veniam magna ipsum cupidatat consectetur laboris sunt proident elit eu. Non anim ad velit proident qui sunt nostrud veniam ullamco nisi. Voluptate ex eu excepteur nostrud nulla mollit nulla culpa ullamco. Aliqua consectetur ullamco duis sunt culpa Lorem non aute reprehenderit cupidatat deserunt adipisicing Lorem.",
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
    shortDesc: "Description for Basil",
    longDescription:
      "Excepteur sit ea sit non proident sint aute duis incididunt esse veniam velit sint. Pariatur pariatur dolore amet exercitation dolor sit consequat. Culpa do laboris adipisicing deserunt.",
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
    shortDesc: "Description for Radish Cress.",
    longDescription:
      "Laborum eu consectetur deserunt voluptate dolor qui sunt proident nostrud. Eiusmod ad Lorem in officia qui enim duis. Esse excepteur laborum laborum esse dolor enim ullamco. Eu mollit id officia excepteur occaecat ipsum tempor aliquip consectetur sit nulla non ex consectetur. Consectetur in minim qui ipsum in.",
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
    shortDesc: "Description for Spicy Mustard.",
    longDescription:
      "Aliqua ex officia sunt duis do. Et laboris veniam tempor in duis culpa aliquip officia sint aute voluptate culpa qui elit. Et ad ex cillum occaecat adipisicing non officia ipsum do velit officia ullamco deserunt culpa. Proident do reprehenderit adipisicing qui incididunt amet enim irure pariatur esse mollit commodo et et. Id laborum cillum eiusmod veniam labore magna. Reprehenderit aliqua pariatur elit consectetur consectetur qui voluptate sit. Exercitation aliqua culpa reprehenderit ex duis irure occaecat do veniam esse.",
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
    shortDesc:
      "Description for Mix of Kale, cabbage, radish cress and wheat grass.",
    longDescription:
      "Eu deserunt quis do nulla. Deserunt consequat occaecat proident ad et reprehenderit nulla mollit nulla est labore eiusmod ullamco reprehenderit. Dolor eiusmod voluptate ullamco labore nisi aliquip ex est tempor laboris ut excepteur Lorem ad. Sit non non commodo consequat officia qui amet quis.",
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
