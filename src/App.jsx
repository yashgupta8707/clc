import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutCLC from "./pages/AboutCLC";
import FoundersMessage from "./pages/FoundersMessage";
import DirectorsMessage from "./pages/DirectorsMessage";
import PrincipalsMessage from "./pages/PrincipalsMessage";
import VisionMission from "./pages/VisionMission";
import RankingStatus from "./pages/RankingStatus";
import CollegeMagazine from "./pages/CollegeMagazine";
import AnnualReports from "./pages/AnnualReports";
import ActsRegulations from "./pages/ActsRegulations";
import Organogram from "./pages/administration/Organogram";
import AntiRaggingCommittee from "./pages/administration/AntiRaggingCommittee";
import Faculty from "./pages/administration/Faculty";
import NonTeachingStaff from "./pages/administration/NonTeachingStaff";
import ManagementCommittee from "./pages/administration/ManagementCommittee";
import CodeOfConduct from "./pages/administration/CodeOfConduct";
import GrievanceRedressal from "./pages/administration/GrievanceRedressal";
import InternalComplaintCommittee from "./pages/administration/InternalComplaintCommittee";

// Academic Pages
import AcademicPrograms from "./pages/academics/AcademicPrograms";
import IQAC from "./pages/academics/IQAC";
import AcademicCollaborations from "./pages/academics/AcademicCollaborations";
import SeminarsWorkshops from "./pages/academics/SeminarsWorkshops";
import SeminarsGallery from "./pages/academics/SeminarsGallery";
import FDPGallery from "./pages/academics/FDPGallery";
import TrainingAwareness from "./pages/academics/TrainingAwareness";
import AcademicFaculty from "./pages/academics/AcademicFaculty";
import Department from "./pages/academics/Department";
import Examination from "./pages/academics/Examination";
import AcademicCalendar from "./pages/academics/AcademicCalendar";
import TimeTable from "./pages/academics/TimeTable";
import NEP from "./pages/academics/NEP";
import Research from "./pages/Research";
import AdmissionsProcess from "./pages/admissions/AdmissionsProcess";
import FeeRefundPolicy from "./pages/admissions/FeeRefundPolicy";

// Student Pages
import StudentList from "./pages/students/StudentList";
import SportsFacilities from "./pages/students/SportsFacilities";
import NCCandICC from "./pages/students/NCCandICC";
import AntiRagging from "./pages/students/AntiRagging";
import FacilitiesDivyang from "./pages/students/FacilitiesDivyang";
import MentorAndKnowledgeCenter from "./pages/students/MentorAndKnowledgeCenter";
import AddOnCourses from "./pages/students/AddOnCourses";
import Achievements from "./pages/students/Achievements";
import HealthAndSEDG from "./pages/students/HealthAndSEDG";
import EqualOpportunityCell from "./pages/students/EqualOpportunityCell";

import CampusOverview from "./pages/campus/CampusOverview";
import CampusSecurity from "./pages/campus/CampusSecurity";
import CommonRooms from "./pages/campus/CommonRooms";
import LegalAidAndMootCourt from "./pages/campus/LegalAidAndMootCourt";
import Infrastructure from "./pages/campus/Infrastructure";
import Sustainability from "./pages/campus/Sustainability";
import CanteenAndComplaints from "./pages/campus/CanteenAndComplaints";

// NAAC Pages
import Feedbacks from "./pages/naac/Feedbacks";
import PolicyAndCommittees from "./pages/naac/PolicyAndCommittees";
import Financials from "./pages/naac/Financials";
import MousAndReports from "./pages/naac/MousAndReports";
import Library from "./pages/Library";
import Gallery from "./pages/Gallery";
import Alumni from "./pages/Allumni";
import Contact from "./pages/Contact";
import Placements from "./pages/students/Achievements copy";
import UndergraduateCourses from "./pages/UndergraduateCourses";
import PostGraduateCourses from "./pages/PostGraduateCourses";

import WhatsAppWidget from "./components/WhatsAppWidget";

// External Redirect Component
const ExternalRedirect = ({ url }) => {
  React.useEffect(() => {
    window.location.href = url;
  }, [url]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to external site...</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Your page content */}
      <WhatsAppWidget
        phone="+918177001081"
        brand="City Law College"
        greeting="Hi, Need help?"
        defaultMessage="Hi, I have a question!"
      />
      <MouseTrail
        strokeColor="#06b6d4" // trail color
        strokeWidth={2} // trail thickness
        lag={0.9} // trail lag (lower = faster)
        size={10} // trail length
      />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/courses/undergraduate" element={<UndergraduateCourses />} />
          <Route path="/courses/postgraduate" element={<PostGraduateCourses />} />

          {/* About Us Routes */}
          <Route path="/about/clc" element={<AboutCLC />} />
          <Route path="/about/founders-message" element={<FoundersMessage />} />
          <Route
            path="/about/directors-message"
            element={<DirectorsMessage />}
          />
          <Route
            path="/about/principals-message"
            element={<PrincipalsMessage />}
          />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/ranking-status" element={<RankingStatus />} />
          <Route path="/about/college-magazine" element={<CollegeMagazine />} />
          <Route path="/about/annual-reports" element={<AnnualReports />} />
          <Route path="/about/acts-regulations" element={<ActsRegulations />} />

          {/* Administration Routes */}
          <Route path="/administration/organogram" element={<Organogram />} />
          <Route
            path="/administration/anti-ragging"
            element={<AntiRaggingCommittee />}
          />
          <Route path="/administration/faculty" element={<Faculty />} />
          <Route
            path="/administration/non-teaching-staff"
            element={<NonTeachingStaff />}
          />
          <Route
            path="/administration/management-committee"
            element={<ManagementCommittee />}
          />
          <Route
            path="/administration/code-of-conduct"
            element={<CodeOfConduct />}
          />
          <Route
            path="/administration/grievance"
            element={<GrievanceRedressal />}
          />
          <Route
            path="/administration/internal-complaint-committee"
            element={<InternalComplaintCommittee />}
          />

          {/* External Redirect Routes for Administration */}
          <Route
            path="/administration/chancellor"
            element={
              <ExternalRedirect url="https://www.lkouniv.ac.in/en/page/chancellor" />
            }
          />
          <Route
            path="/administration/vice-chancellor"
            element={
              <ExternalRedirect url="https://www.lkouniv.ac.in/en/page/vice-chancellor" />
            }
          />
          <Route
            path="/administration/pro-vice-chancellor"
            element={
              <ExternalRedirect url="https://www.lkouniv.ac.in/en/page/pro-vice-chancellor" />
            }
          />
          <Route
            path="/administration/registrar"
            element={
              <ExternalRedirect url="https://www.lkouniv.ac.in/en/page/registrar" />
            }
          />
          <Route
            path="/administration/finance-officer"
            element={
              <ExternalRedirect url="https://www.lkouniv.ac.in/en/page/finance-officer" />
            }
          />
          <Route
            path="/administration/controller-of-examination"
            element={
              <ExternalRedirect url="https://www.lkouniv.ac.in/en/page/controller-of-examination" />
            }
          />
          <Route
            path="/administration/academic-leadership-dean"
            element={
              <ExternalRedirect url="https://www.lkouniv.ac.in/en/page/deans-of-faculties" />
            }
          />

          {/* Academics Routes */}
          <Route path="/academics/programs" element={<AcademicPrograms />} />
          <Route path="/academics/iqac" element={<IQAC />} />
          <Route
            path="/academics/collaborations"
            element={<AcademicCollaborations />}
          />
          <Route
            path="/academics/seminars-workshops"
            element={<SeminarsWorkshops />}
          />
          <Route
            path="/academics/seminars-workshops/seminars"
            element={<SeminarsGallery />}
          />
          <Route
            path="/academics/seminars-workshops/fdp"
            element={<FDPGallery />}
          />
          <Route
            path="/academics/seminars-workshops/training"
            element={<TrainingAwareness />}
          />
          <Route path="/academics/faculty" element={<AcademicFaculty />} />
          <Route path="/academics/department" element={<Department />} />
          <Route path="/academics/examination" element={<Examination />} />
          <Route path="/academics/calendar" element={<AcademicCalendar />} />
          <Route path="/academics/timetable" element={<TimeTable />} />
          <Route path="/academics/nep" element={<NEP />} />

          <Route path="/research" element={<Research />} />

          {/* Admissions Routes */}
          <Route path="/admissions/process" element={<AdmissionsProcess />} />
          <Route
            path="/admissions/refund-policy"
            element={<FeeRefundPolicy />}
          />

          {/* External redirect for Prospectus */}
          <Route
            path="/admissions/prospectus"
            element={
              <ExternalRedirect url="https://example.com/prospectus.pdf" />
            }
          />

          {/* Students Section */}
          <Route path="/students/list" element={<StudentList />} />
          <Route path="/students/sports" element={<SportsFacilities />} />
          <Route path="/students/ncc-icc" element={<NCCandICC />} />
          <Route path="/students/anti-ragging" element={<AntiRagging />} />
          <Route
            path="/students/facilities-divyang"
            element={<FacilitiesDivyang />}
          />
          <Route
            path="/students/mentor-knowledge"
            element={<MentorAndKnowledgeCenter />}
          />
          <Route path="/students/addon-courses" element={<AddOnCourses />} />
          <Route path="/students/achievements" element={<Achievements />} />
          <Route path="/students/placement-cell" element={<Placements />} />
          <Route path="/students/health-sedg" element={<HealthAndSEDG />} />
          <Route
            path="/students/equal-opportunity"
            element={<EqualOpportunityCell />}
          />

          {/* External Redirect PDFs */}
          <Route
            path="/students/model-question-paper"
            element={
              <ExternalRedirect url="https://example.com/model-question-paper.pdf" />
            }
          />
          <Route
            path="/students/grievance"
            element={
              <ExternalRedirect url="https://example.com/grievance.pdf" />
            }
          />
          <Route
            path="/students/code-of-conduct"
            element={
              <ExternalRedirect url="https://example.com/code-of-conduct.pdf" />
            }
          />

          {/* Campus Section */}
          <Route path="/campus" element={<CampusOverview />} />
          <Route path="/campus/security" element={<CampusSecurity />} />
          <Route path="/campus/common-rooms" element={<CommonRooms />} />
          <Route
            path="/campus/legal-aid-mootcourt"
            element={<LegalAidAndMootCourt />}
          />
          <Route path="/campus/infrastructure" element={<Infrastructure />} />
          <Route path="/campus/sustainability" element={<Sustainability />} />
          <Route
            path="/campus/canteen-complaints"
            element={<CanteenAndComplaints />}
          />

          {/* NAAC Section */}
          <Route path="/naac/feedbacks" element={<Feedbacks />} />
          <Route path="/naac/policies" element={<PolicyAndCommittees />} />
          <Route path="/naac/financials" element={<Financials />} />
          <Route path="/naac/mous-reports" element={<MousAndReports />} />

          {/* External Redirects (Optional if you want separate direct PDF links) */}
          <Route
            path="/naac/objectives-strategies"
            element={
              <ExternalRedirect url="https://example.com/objectives-strategies.pdf" />
            }
          />

          <Route path="/library" element={<Library />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
