import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';

// router không cần đăng nhập
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

// router bắt buộc đăng nhập nếu không sẽ chuyển sang /login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
