export const com = {
  provinsi: 'https://dev.farizdotid.com/api/daerahindonesia/provinsi',
  kota: id_provinsi =>
    `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id_provinsi}`,
  kecamatan: id_kota =>
    `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${id_kota}`,
  kelurahan: id_kecamatan => {
    `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${id_kecamatan}`;
  },
};
