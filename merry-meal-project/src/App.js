import React from 'react'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Dashboard } from './Components/Admin/Dashboard';
import ManageMember from './Components/Admin/Members/ManageMember';
import ManageDonator from './Components/Admin/Donator/ManageDonator';
import MemberProfile from './Components/Admin/Members/MemberProfile';
import DonatorProfile from './Components/Admin/Donator/DonatorProfile';
import ManageMeals from './Components/Admin/Meals/ManageMeals';
import MealDetails from './Components/Admin/Meals/MealDetails';
import ManageFundraising from './Components/Admin/Fundrasing/ManageFundraising';
import ExpenseFundraising from './Components/Admin/Fundrasing/ExpenseFundraising';
import ManageDelivery from './Components/Admin/Delivery/ManageDelivery';
import CareGiverDashboard from './Components/Caregiver/CareGiverDashboard';
import PartnerDashboard from './Components/Partner/PartnerDashboard';
import CareGiverAcceptedMember from './Components/Caregiver/CareGiverAcceptedMember';
import CareGiverRequestMember from './Components/Caregiver/CareGiverRequestMember';
import MemberHome from './Components/Members/MemberHome';
import ViewMeals from './Components/Meals/ViewMeals';
import Volunteer from './Components/Volunteer/Volunteer';
import { Donate } from './Components/Donator/Donate';
import AboutUs from './Components/Members/AboutUs';
import ContactUs from './Components/Members/ContactUs';
import MemberRegistration from './Components/Members/MemberRegistration';
import Login from './Components/Login/Login';
import RiderRegisteration from './Components/Rider/RiderRegisteration';
import CareGiverRegistration from './Components/Caregiver/CareGiverRegistration';
import PartnerRegisteration from './Components/Partner/PartnerRegisteration';
import FrogetPassword from './Components/Login/FrogetPassword';
import ResetPassword from './Components/Login/ResetPassword';
import Order from './Components/Meals/Order';
import OrderSuccess from './Components/Meals/OrderSuccess';
import CareGiverProfile from './Components/Caregiver/CareGiverProfile';
import RiderHome from './Components/Rider/RiderHome';
import PartnerManageMeal from './Components/Partner/PartnerManageMeal';
import PartnerAddMeal from './Components/Partner/PartnerAddMeal';
import PartnerProfile from './Components/Partner/PartnerProfile';
import RiderOrderList from './Components/Rider/RiderOrderList';
import MemberOrderList from './Components/Rider/MemberOrderList';
import RiderProfile from './Components/Rider/RiderProfile';
import Payment from './Components/Donator/Payment';
import PaymentSuccess from './Components/Donator/PaymentSuccess';
import UpdateRiderProfile from './Components/Rider/UpdateRiderProfile';
import CareGiverUpdateProfile from './Components/Caregiver/CareGiverUpdateProfile';
import PartnerUpdateProfile from './Components/Partner/PartnerUpdateProfile';
import ManageRider from './Components/Admin/Volunteers/ManageRider';
import ManageCareGiver from './Components/Admin/Volunteers/ManageCareGiver';
import ManagePartner from './Components/Admin/Volunteers/ManagePartner';
import PageNotFound from './Components/PageNotFound';
import MemberOrderDetails from './Components/Rider/MemberOrderDetails';
import { AuthProvider, useAuth } from './Components/Login/Auth';
import RequireAuth from './Components/Login/RequireAuth';
import Location from './Components/Meals/Location';
import MemberSiteProfile from './Components/Members/MemberSiteProfile';
import MemberUpdateProfile from './Components/Members/MemberUpdateProfile';
import ViewCareGiverProfile from './Components/Admin/Volunteers/ViewCareGiverProfile';
import ViewRiderProfile from './Components/Admin/Volunteers/ViewRiderProfile';
import ViewPartnerProfile from './Components/Admin/Volunteers/ViewPartnerProfile';
import CheckCareGiver from './Components/Admin/Caregiver/CheckCareGiver';
import PartnerOrderList from './Components/Partner/PartnerOrderList';
import PartnerAcceptedOrderList from './Components/Partner/PartnerAcceptedOrderList';
import PartnerOrderDetails from './Components/Partner/PartnerOrderDetails';
import { Foodpolicy } from './Components/Members/FoodPolicy';



function App() {
  const auth = useAuth()






  return (
    <BrowserRouter>

      <AuthProvider>
        <Routes>

          {/* public route */}
          <Route path="/" element={<MemberHome />} />
          <Route path="viewMeal" element={<ViewMeals />} />
          <Route path="viewVolunteer" element={<Volunteer />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="foodpolicy" element={<Foodpolicy />} />

          {/* donate route */}
          <Route path="donate" element={<Donate />} />
          <Route path="donate/payment/:amount" element={<Payment />} />
          <Route path="donate/payment/paymentSuccess" element={<PaymentSuccess />} />


          {/* register route */}
          <Route path="memberRegister" element={<MemberRegistration />} />
          <Route path="riderRegister" element={<RiderRegisteration />} />
          <Route path="caregiverRegister" element={<CareGiverRegistration />} />
          <Route path="partnerRegister" element={<PartnerRegisteration />} />


          {/* login route */}
          <Route path="login" element={<Login />} />
          <Route path="forgetPassword" element={<FrogetPassword />} />
          <Route path="resetPassword" element={<ResetPassword />} />


          {/* protected route */}
          {/* for member */}
          <Route path="profile" element={<RequireAuth><MemberSiteProfile /></RequireAuth>} />
          <Route path="profile/updateProfile" element={<RequireAuth><MemberUpdateProfile /></RequireAuth>} />


          {/* order route */}
          <Route path="viewMeal/order" element={<RequireAuth><Order /></RequireAuth>} />
          <Route path="viewMeal/order/orderSuccess" element={<RequireAuth><OrderSuccess /></RequireAuth>} />


          {/* care giver route */}
          <Route path="staff/caregiver/home" element={<RequireAuth><CareGiverDashboard /></RequireAuth>} />
          <Route path="staff/caregiver/profile" element={<RequireAuth><CareGiverProfile /></RequireAuth>} />
          <Route path="staff/caregiver/profile/updateProfile" element={<RequireAuth><CareGiverUpdateProfile /></RequireAuth>} />
          <Route path="staff/caregiver/acceptedMember" element={<RequireAuth><CareGiverAcceptedMember /></RequireAuth>} />
          <Route path="staff/caregiver/requestMember" element={<RequireAuth><CareGiverRequestMember /></RequireAuth>} />


          {/* partner route */}
          <Route path="staff/partner/home" element={<RequireAuth><PartnerDashboard /></RequireAuth>} />
          <Route path="staff/partner/profile" element={<RequireAuth><PartnerProfile /></RequireAuth>} />
          <Route path="staff/partner/profile/updateProfile" element={<RequireAuth><PartnerUpdateProfile /></RequireAuth>} />
          <Route path="staff/partner/manageMeal" element={<RequireAuth><PartnerManageMeal /></RequireAuth>} />
          <Route path="staff/partner/addMeal" element={<RequireAuth><PartnerAddMeal /></RequireAuth>} />
          <Route path="staff/partner/orders" element={<RequireAuth><PartnerOrderList /></RequireAuth>} />
          <Route path="staff/partner/orders/orderDetails/:id" element={<RequireAuth><PartnerOrderDetails /></RequireAuth>} />
          <Route path="staff/partner/acceptedOrder" element={<RequireAuth><PartnerAcceptedOrderList /></RequireAuth>} />


          {/* Rider route */}
          <Route path="staff/rider/home" element={<RequireAuth><RiderHome /></RequireAuth>} />
          <Route path="staff/rider/profile" element={<RequireAuth><RiderProfile /></RequireAuth>} />
          <Route path="staff/rider/profile/updateProfile" element={<RequireAuth><UpdateRiderProfile /></RequireAuth>} />
          <Route path="staff/rider/orderList" element={<RequireAuth><MemberOrderList /></RequireAuth>} />
          <Route path="staff/rider/orderList/orderDetails/:id" element={<RequireAuth><MemberOrderDetails /></RequireAuth>} />
          <Route path="staff/rider/deliveredOrderList" element={<RequireAuth><RiderOrderList /></RequireAuth>} />


          {/* admin route */}
          <Route index path="admin/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="admin/manageRider" element={<RequireAuth><ManageRider /></RequireAuth>} />
          <Route path="admin/manageCaregiver" element={<RequireAuth><ManageCareGiver /></RequireAuth>} />
          <Route path="admin/managePartner" element={<RequireAuth><ManagePartner /></RequireAuth>} />
          <Route path="admin/manageCaregiver/viewCareGiver/:id" element={<RequireAuth><ViewCareGiverProfile /></RequireAuth>} />
          <Route path="admin/manageRider/viewRider/:id" element={<RequireAuth><ViewRiderProfile /></RequireAuth>} />
          <Route path="admin/managePartner/viewPartner/:id" element={<RequireAuth><ViewPartnerProfile /></RequireAuth>} />
          <Route path="admin/manageMember" element={<RequireAuth><ManageMember /></RequireAuth>} />
          <Route path="admin/manageMember/viewMember/:id" element={<RequireAuth><MemberProfile /></RequireAuth>} />
          <Route path="admin/manageDonator" element={<RequireAuth><ManageDonator /></RequireAuth>} />
          <Route path="admin/manageDonator/viewDonator/:id" element={<RequireAuth><DonatorProfile /></RequireAuth>} />
          <Route path="admin/manageMeal" element={<RequireAuth><ManageMeals /></RequireAuth>} />
          <Route path="admin/manageMeal/mealDetails/:id" element={<RequireAuth><MealDetails /></RequireAuth>} />
          <Route path="admin/manageFundraising" element={<RequireAuth><ManageFundraising /></RequireAuth>} />
          <Route path="admin/manageFundraising/expenseFundraising" element={<RequireAuth><ExpenseFundraising /></RequireAuth>} />
          <Route path="admin/manageDelivery" element={<RequireAuth><ManageDelivery /></RequireAuth>} />
          <Route path="admin/checkCaregiver" element={<RequireAuth><CheckCareGiver /></RequireAuth>} />






          {/* page not found  */}
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </AuthProvider>

    </BrowserRouter>
  );
}

export default App;
