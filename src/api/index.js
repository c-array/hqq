import axios from 'axios';
import qs from 'qs';
// import hmacsha1 from 'crypto-js/hmac-sha1';
// import base64 from 'crypto-js/enc-base64';

const apiHost = process.env.API_HOST;
// const apiKey = 'h5';

const instance = axios.create({
  baseURL: apiHost,
  transformRequest: [data => qs.stringify(data)],
});

const AuthAPI = {
  login: () => instance.get('/auth/auth/getCode'),
  refresh: params => instance.post('/auth/refresh', params),
  isLogin: params => instance.get('/auth/isLogin', { params }),
};

const GoodsAPI = {
  categories: params => instance.get('product/category/recursive', { params }),
};

const StoreAPI = {
  findAll: params => instance.get('/user/manage/pagination', { params }),
  detail: params => instance.get('/user/manage/get', { params }),
  sub: params => instance.post('/user/manage/update', params),
  upimg: params => instance.post('', params),
};

const MissAPI = {
  list: params => instance.get('/product/category/recursive', { params }),
  submit: params => instance.post('product/category/addCategory', params),
};

const OrderAPI = {
  mess: params => instance.get('/order/user/pagination', { params }),
  detai: params => instance.get('/order/user/detail', { params }),
  suppli: params => instance.get('product/merchant/pagination', { params }),
  newsuppli: params => instance.get('product/merchant/paginationManageMchtSku', { params }),
  selected: params => instance.get('/product/standard/pagination-by-sku', { params }),
  commit: params => instance.get('/order/user/update', { params }),
  send: params => instance.get('/order/user/download', { params }),
};

const WechatAPI = {
  signature: params => instance.get('/wechat/mp/signature', { params }),
};

const RecordAPI = {
  save: data => instance.post('/supplier/record/save', data),
  all: params => instance.get('/supplier/record', { params }),
  total: params => instance.get('/supplier/record/total', { params }),
  category: params => instance.get('/user/manage/update', { params }),
};

const SupplierAPI = {
  mesage: params => instance.get('user/merchant/pagination', { params }),
  message: params => instance.get('/product/merchant/pagination-mcht-info', { params }),
  audit: params => instance.get('/user/merchant/get', { params }),
  preservation: params => instance.post('/user/merchant/update', params),
  addsub: params => instance.post('/user/merchant/save', params),
  visiter: params => instance.get('/user/manage/getInviteCodeList', params),
};

const ProductAPI = {
  productlist: params => instance.get('/product/standard/pagination-by-sku', { params }),
  productlists: params => instance.get('/product/standard/paginationSkuAdmin', { params }),
  attribute: params => instance.get('/product/brand/pagination', { params }),
  Unit: params => instance.get('/product/unit/pagination', { params }),
  Unitadd: params => instance.get('/product/unit/add', { params }),
  Unitedit: params => instance.get('/product/unit/update', { params }),
  Unitnoedit: params => instance.get('/product/unit/info', { params }),
  look: params => instance.get('/product/merchant/mchtSkuPagination', { params }),
  stand: params => instance.get('/product/category/recursive', { params }),
  comdetail: params => instance.get('/product/standard/detailBySku', { params }),
  classorder: params => instance.get('/product/category/getCategoryById', { params }),
  brandadd: params => instance.get('/product/brand/add', { params }),
  branoedit: params => instance.get('/product/brand/info', { params }),
  brandupda: params => instance.get('/product/brand/update', { params }),
  catgro: params => instance.get('/product/category/getBrandPropNameById', { params }),
  catBrandVals: params => instance.get('/product/standard/getVal', { params }),
  delVal: params => instance.get('/product/standard/softDelVal', { params }),
  addVal: params => instance.get('/product/standard/insertVal', { params }),
  lookedit: params => instance.get('/product/standard/spuDetail', { params }),
  units: () => instance.get('/product/unit/all'),
  addSku: params => instance.get('/product/standard/insertSpuSkuInfo', { params }),
  updateSku: params => instance.post('/product/standard/updateSpuSkuInfo', params),
  delBrandFromCat: params => instance.get('/product/brand/delBrandCatRelation', { params }),
  delPropFromCat: params => instance.get('/product/property/delPropertyCateRelation', { params }),
  searchBrand: params => instance.get('/product/brand/getBrandByName', { params }),
  searchBrands: params => instance.get('/product/brand/brands', { params }),
  addRelation: params => instance.get('/product/category/addRelation', { params }),
  updateCategory: params => instance.post('/product/category/updateCategory', params),
  choose: params => instance.get('/product/merchant/choosedProductSave', { params }),
  Specifications: params => instance.get('/product/val/findValByName', { params }),
};

const MerchantAPI = {
  rule: rule => instance.post('/user/merchant/deliveryAdd', rule),
  rules: accountId => instance.get('/user/merchant/deliveryList', { params: { accountId } }),
  delete: params => instance.post('/user/merchant/deliveryDelete', params),
  shelve: params => instance.post('/product/merchant/shelved', params),
  saveup: params => instance.post('/product/merchant/choosedProductInfoUpdate', params),
  findBrand: params => instance.get('/product/brand/infoByName', { params }),
  brand: params => instance.get('/product/brand/getBrandByName', { params }),
};

const Matching = {
  grabel: params => instance.get('/operation/crawled/getList', { params }),
  mantc: params => instance.get('/operation/crawled/getMatchedList', { params }),
  mantck: params => instance.get('/operation/crawled/matcheddetail', { params }),
  mantcked: params => instance.get('/operation/crawled/matchedSave', { params }),
  mantcmove: params => instance.get('/operation/crawled/removeMatchedSave', { params }),
  mantcsearch: params => instance.get('/operation/crawled/standardSkuSearch', { params }),
  mantcsucc: params => instance.get('/operation/crawled/listForMatch', { params }),
};

const UploadAPI = {
  upload: file => instance.post('/common/file/upload', file),
};

const BDAPI = {
  findByName: name => instance.get('/user/manage/findByName', { params: { name } }),
};

const MergeAPI = {
  getCommodity: id => instance.get('/product/standard/merge', { params: id }),
  qureyCommodity: info => instance.get('/product/standard/mergeSkuSearch', { params: info }),
  mergeCommodity: info => instance.get('/product/standard/mergeSave', { params: info }),
  mergePage: info => instance.get('/product/standard/paginationMerge', { params: info }),
  auditPassed: info => instance.post('/product/standard/reviewMerge', info),
  moveNerge: info => instance.get('/product/standard/mergeDel', { params: info }),
};
//神批接口api
const shenPIAPI = {
  merchant: params => instance.get('/product/merchant/paginationStay', { params }),
  getOneMchtStay: params => instance.get('/product/merchant/getOneMchtStay', { params }),
  getBrandByName: params => instance.get('/product/brand/getBrandByName', { params }),
  bar: params => instance.get('/product/merchant/reviewAssocBarcode', { params }),
  getSpuByName: params => instance.get('/product/brand/getSpuByName', { params }),
  addProduct: params => instance.post('/product/standard/addMchtProduct', params),
  addSku: params => instance.get('/product/standard/addSku', { params }), // 第二个提交
  querySkuBySpu: params => instance.get('/product/standard/querySkuBySpu', { params }),
  querySkuBySpuTwo: params => instance.get('product/standard/spuDetail', { params }),
  getSpuByNametwo: params => instance.get('/product/standard/getSpuByName', { params }), // 第二个搜索
  skuBarcodeList: params => instance.get('/product/standard/skuBarcodeList', { params }), // 合并提交
};
// 报表管理api
const DailyAPI = {
  sundrycheck: params => instance.get('/stats/storeStats/registerStats', { params }),
  sundrytotal: params => instance.get('/stats/storeStats/getCityStoreNum', { params }),
  order: params => instance.get('/stats/orderStats/getOrderList', { params }),
  merchanttotal: params => instance.get('/stats/merchantStats/getMerchantList', { params }),
};

const LogAPI = {
  loglist: params => instance.get('/operation/log/pagination', { params }),
};

const SaAPI = {
  login: params => instance.get('auth/auth/authorize', { params }),
};

const CategoryAPI = {
  getCategoryList: params => instance.get('/product/category/recursive', { params }),
  getTable: params => instance.get('/product/category/getValList', { params }),
  getAllProps: params => instance.get('/product/property/getPropList', { params }),
  delBackCat: params => instance.get('/product/category/delValInCat', { params }),

  updateCatInfo: params => instance.post('/product/category/updateCatInfo', params),
  addValInCat: params => instance.post('/product/category/addValInCat', params),
};

const BrandAPI = {
  search: params => instance.get('/product/brand/getBrandByName', { params }),
  business: params => instance.get('/product/brand/getBusinessByName', { params }),
  deleteBrand: params => instance.post('/product/brand/deleteBrand', params),
};

export {
  AuthAPI,
  WechatAPI,
  GoodsAPI,
  RecordAPI,
  StoreAPI,
  MissAPI,
  OrderAPI,
  SupplierAPI,
  UploadAPI,
  ProductAPI,
  MerchantAPI,
  BDAPI,
  Matching,
  MergeAPI,
  shenPIAPI,
  DailyAPI,
  LogAPI,
  SaAPI,
  CategoryAPI,
  BrandAPI,
};
