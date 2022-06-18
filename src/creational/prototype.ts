enum Taste {
  sour = 'SOUR',
  sweet = 'SWEET',
}

const taste = {
  isYummy() {
    return 'yes!!!';
  },
};

export const createTastes = () => {
  const sweet = Object.create(taste, { taste: { value: Taste.sweet } });

  sweet.__proto__;
  Object.getPrototypeOf(sweet);

  const sweetAndSour = Object.create(sweet, {
    secondTaste: { value: Taste.sour },
  });

  return [sweet, sweetAndSour];
};
