import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// Page Components
import Home from '../pages/Home';
import AboutRBN from '../pages/AboutRBN';
import AYUSHIntegratedHealthcare from '../pages/AYUSHIntegratedHealthcare';
import Naturopathy from '../pages/Naturopathy';
import OzoneTherapy from '../pages/OzoneTherapy';
import IVNutritionWellness from '../pages/IVNutritionWellness';
import YogaMeditation from '../pages/YogaMeditation';
import Acupuncture from '../pages/Acupuncture';
import HydrotherapyNaturalTherapies from '../pages/HydrotherapyNaturalTherapies';
import ShirodharaRejuvenation from '../pages/ShirodharaRejuvenation';
import MetabolicWellness from '../pages/MetabolicWellness';
import GutHealthDetox from '../pages/GutHealthDetox';
import ThreeRHealthRevival from '../pages/ThreeRHealthRevival';
import LifestyleModification from '../pages/LifestyleModification';
import WellnessCamps from '../pages/WellnessCamps';
import SirumalaiWellnessRetreat from '../pages/SirumalaiWellnessRetreat';
import HealthAwarenessPrograms from '../pages/HealthAwarenessPrograms';
import WellnessGoals from '../pages/WellnessGoals';
import HealthLibrary from '../pages/HealthLibrary';
import ContactConsultation from '../pages/ContactConsultation';
import NotFound from '../pages/NotFound';

/**
 * AppRoutes defines the central routing system for all 20 pages of RBN AYUSH HEALTH CARE.
 * Each route is wrapped within the shared MainLayout.
 */
function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* 01. Home */}
        <Route path="/" element={<Home />} />

        {/* 02. About RBN */}
        <Route path="/about" element={<AboutRBN />} />

        {/* 03. AYUSH Integrated Healthcare */}
        <Route path="/ayush-integrated-healthcare" element={<AYUSHIntegratedHealthcare />} />

        {/* 04. Naturopathy */}
        <Route path="/naturopathy" element={<Naturopathy />} />

        {/* 05. Ozone Therapy */}
        <Route path="/ozone-therapy" element={<OzoneTherapy />} />

        {/* 06. IV Nutrition & Wellness */}
        <Route path="/iv-nutrition-wellness" element={<IVNutritionWellness />} />

        {/* 07. Yoga & Meditation */}
        <Route path="/yoga-meditation" element={<YogaMeditation />} />

        {/* 08. Acupuncture */}
        <Route path="/acupuncture" element={<Acupuncture />} />

        {/* 09. Hydrotherapy & Natural Therapies */}
        <Route path="/hydrotherapy-natural-therapies" element={<HydrotherapyNaturalTherapies />} />

        {/* 10. Shirodhara & Rejuvenation */}
        <Route path="/shirodhara-rejuvenation" element={<ShirodharaRejuvenation />} />

        {/* 11. Metabolic Wellness */}
        <Route path="/metabolic-wellness" element={<MetabolicWellness />} />

        {/* 12. Gut Health & Detox */}
        <Route path="/gut-health-detox" element={<GutHealthDetox />} />

        {/* 13. 3R Health Revival */}
        <Route path="/3r-health-revival" element={<ThreeRHealthRevival />} />

        {/* 14. Lifestyle Modification */}
        <Route path="/lifestyle-modification" element={<LifestyleModification />} />

        {/* 15. Wellness Camps */}
        <Route path="/wellness-camps" element={<WellnessCamps />} />

        {/* 16. Sirumalai Wellness Retreat */}
        <Route path="/sirumalai-retreat" element={<SirumalaiWellnessRetreat />} />
        <Route path="/sirumalai-wellness-retreat" element={<SirumalaiWellnessRetreat />} />

        {/* 17. Health Awareness Programs */}
        <Route path="/health-awareness-programs" element={<HealthAwarenessPrograms />} />

        {/* 18. Wellness Goals */}
        <Route path="/wellness-goals" element={<WellnessGoals />} />

        {/* 19. Health Library */}
        <Route path="/health-library" element={<HealthLibrary />} />
        <Route path="/blog" element={<HealthLibrary />} />

        {/* 20. Contact & Consultation */}
        <Route path="/contact" element={<ContactConsultation />} />

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

