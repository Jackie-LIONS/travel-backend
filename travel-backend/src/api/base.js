/**
 * 存放所有的网络请求地址
 */
const base ={
    getLogin: "/backstage/admin/login",
    getProducts: "/backstage/product/all",
    getCategry: "/backstage/category/all",
    updateCategory: '/backstage/category/update',
    deleteCategory: '/backstage/category/delete?cid=',
    getAdminPage: '/backstage/admin/all',
    getRoleFindAll: '/backstage/role/findAll',
}
export default base