import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { DishView } from '../pages/DishView';
import { AddDish } from '../pages/AddDish';
import { EditDish } from '../pages/EditDish';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dishview" element={<DishView />} />
            <Route path="/adddish" element={<AddDish />} />
            <Route path="/editdish" element={<EditDish />} />
        </Routes>
    );
}