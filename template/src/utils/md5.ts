import cryptoMd5 from 'crypto-js/md5';

function md5(str: string) {
  return cryptoMd5(str).toString().toUpperCase();
}

export default md5;
