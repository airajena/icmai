import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Members from "./pages/Members";
import Students from "./pages/Students";
import Placement from "./pages/Placement";
import ProfessionalDevelopment from "./pages/ProfessionalDevelopment";
import Taxation from "./pages/Taxation";
import BFSI from "./pages/BFSI";
import CAT from "./pages/CAT";
import AdvancedStudies from "./pages/AdvancedStudies";
import Journal from "./pages/Journal";
import IndustryConnect from "./pages/IndustryConnect";
import DipMA from "./pages/DipMA";
import NotFound from "./pages/NotFound";

// About sub-pages
import InstituteHistory from "./pages/about/InstituteHistory";
import VisionMission from "./pages/about/VisionMission";
import InstituteAct from "./pages/about/InstituteAct";
import CouncilMembers from "./pages/about/CouncilMembers";
import PastPresidents from "./pages/about/PastPresidents";
import OrganisationStructure from "./pages/about/OrganisationStructure";
import DepartmentalHeads from "./pages/about/DepartmentalHeads";
import AwardsRecognition from "./pages/about/AwardsRecognition";
import AnnualReports from "./pages/about/AnnualReports";

// Members sub-pages
import MembersForms from "./pages/members/MembersForms";
import MembersGuidelines from "./pages/members/MembersGuidelines";
import MembersLogin from "./pages/members/MembersLogin";
import PractisingMembers from "./pages/members/PractisingMembers";
import OnlineMembershipApplication from "./pages/members/OnlineMembershipApplication";
import MemberSearch from "./pages/members/MemberSearch";
import MemberBenevolentFund from "./pages/members/MemberBenevolentFund";
import MembersContact from "./pages/members/MembersContact";

// Students sub-pages
import StudentsCourses from "./pages/students/StudentsCourses";
import StudentsAdmission from "./pages/students/StudentsAdmission";
import StudentsExemption from "./pages/students/StudentsExemption";
import StudentsTraining from "./pages/students/StudentsTraining";
import StudentsExaminations from "./pages/students/StudentsExaminations";
import StudentsNetwork from "./pages/students/StudentsNetwork";
import StudentsPress from "./pages/students/StudentsPress";
import StudentsContact from "./pages/students/StudentsContact";

// Placement sub-pages
import PlacementAbout from "./pages/placement/PlacementAbout";
import CareerCounselling from "./pages/placement/CareerCounselling";
import CSetProgram from "./pages/placement/CSetProgram";
import OrientationProgramme from "./pages/placement/OrientationProgramme";
import CampusPlacement from "./pages/placement/CampusPlacement";
import OurRecruiters from "./pages/placement/OurRecruiters";
import RecruiterZone from "./pages/placement/RecruiterZone";
import PlacementContact from "./pages/placement/PlacementContact";

// PD & CPE sub-pages
import PDAbout from "./pages/pd-cpe/PDAbout";
import ProfessionalAvenues from "./pages/pd-cpe/ProfessionalAvenues";
import PDPublications from "./pages/pd-cpe/PDPublications";
import CARRCAR from "./pages/pd-cpe/CARRCAR";
import PDFAQs from "./pages/pd-cpe/PDFAQs";
import CPE from "./pages/pd-cpe/CPE";
import MCBT from "./pages/pd-cpe/MCBT";
import MES from "./pages/pd-cpe/MES";

// Taxation sub-pages
import TaxationAbout from "./pages/taxation/TaxationAbout";
import TaxationPublication from "./pages/taxation/TaxationPublication";
import TaxationCourses from "./pages/taxation/TaxationCourses";
import GST from "./pages/taxation/GST";
import IndirectTaxation from "./pages/taxation/IndirectTaxation";
import DirectTaxation from "./pages/taxation/DirectTaxation";
import TaxationHelpDesk from "./pages/taxation/TaxationHelpDesk";
import TaxationFAQ from "./pages/taxation/TaxationFAQ";
import TaxationContact from "./pages/taxation/TaxationContact";
import GSTServices from "./pages/taxation/GSTServices";
import TaxHelpdesk from "./pages/taxation/TaxHelpdesk";

// BFSI sub-pages
import BFSIAbout from "./pages/bfsi/BFSIAbout";
import BFSIPublication from "./pages/bfsi/BFSIPublication";
import BFSICourses from "./pages/bfsi/BFSICourses";
import BFSIWebinars from "./pages/bfsi/BFSIWebinars";
import BFSIHelpDesk from "./pages/bfsi/BFSIHelpDesk";
import BFSIContact from "./pages/bfsi/BFSIContact";

// Advanced Studies sub-pages
import AdvancedStudiesAbout from "./pages/advanced-studies/AdvancedStudiesAbout";
import AdvancedStudiesCourses from "./pages/advanced-studies/AdvancedStudiesCourses";
import AdvancedStudiesExaminations from "./pages/advanced-studies/AdvancedStudiesExaminations";
import AdvancedStudiesPublications from "./pages/advanced-studies/AdvancedStudiesPublications";
import AdvancedStudiesResearch from "./pages/advanced-studies/AdvancedStudiesResearch";
import AdvancedStudiesContact from "./pages/advanced-studies/AdvancedStudiesContact";

// Journal sub-pages
import LatestJournals from "./pages/journal/LatestJournals";
import JournalArchive from "./pages/journal/JournalArchive";
import ResearchPapers from "./pages/journal/ResearchPapers";
import CaseStudies from "./pages/journal/CaseStudies";
import IndustryReports from "./pages/journal/IndustryReports";

// Industry Connect sub-pages
import IndustryCollaborations from "./pages/industry-connect/IndustryCollaborations";
import CorporatePartnerships from "./pages/industry-connect/CorporatePartnerships";
import ProfessionalNetworks from "./pages/industry-connect/ProfessionalNetworks";
import IndustryEvents from "./pages/industry-connect/IndustryEvents";

// DIP.MA sub-pages
import DipMACourse from "./pages/dipma/DipMACourse";
import DipMAAdmission from "./pages/dipma/DipMAAdmission";
import DipMACurriculum from "./pages/dipma/DipMACurriculum";
import DipMAExamination from "./pages/dipma/DipMAExamination";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/history" element={<InstituteHistory />} />
          <Route path="/about/vision" element={<VisionMission />} />
          <Route path="/about/act" element={<InstituteAct />} />
          <Route path="/about/council" element={<CouncilMembers />} />
          <Route path="/about/presidents" element={<PastPresidents />} />
          <Route path="/about/structure" element={<OrganisationStructure />} />
          <Route path="/about/heads" element={<DepartmentalHeads />} />
          <Route path="/about/awards" element={<AwardsRecognition />} />
          <Route path="/about/reports" element={<AnnualReports />} />

          {/* Members Routes */}
          <Route path="/members" element={<Members />} />
          <Route path="/members/forms" element={<MembersForms />} />
          <Route path="/members/guidelines" element={<MembersGuidelines />} />
          <Route path="/members/login" element={<MembersLogin />} />
          <Route path="/members/practising" element={<PractisingMembers />} />
          <Route path="/members/application" element={<OnlineMembershipApplication />} />
          <Route path="/members/search" element={<MemberSearch />} />
          <Route path="/members/fund" element={<MemberBenevolentFund />} />
          <Route path="/members/contact" element={<MembersContact />} />

          {/* Students Routes */}
          <Route path="/students" element={<Students />} />
          <Route path="/students/courses" element={<StudentsCourses />} />
          <Route path="/students/admission" element={<StudentsAdmission />} />
          <Route path="/students/exemption" element={<StudentsExemption />} />
          <Route path="/students/training" element={<StudentsTraining />} />
          <Route path="/students/examinations" element={<StudentsExaminations />} />
          <Route path="/students/network" element={<StudentsNetwork />} />
          <Route path="/students/press" element={<StudentsPress />} />
          <Route path="/students/contact" element={<StudentsContact />} />

          {/* Placement Routes */}
          <Route path="/placement" element={<Placement />} />
          <Route path="/placement/about" element={<PlacementAbout />} />
          <Route path="/placement/counselling" element={<CareerCounselling />} />
          <Route path="/placement/cset" element={<CSetProgram />} />
          <Route path="/placement/orientation" element={<OrientationProgramme />} />
          <Route path="/placement/campus" element={<CampusPlacement />} />
          <Route path="/placement/recruiters" element={<OurRecruiters />} />
          <Route path="/placement/recruiter-zone" element={<RecruiterZone />} />
          <Route path="/placement/contact" element={<PlacementContact />} />

          {/* PD & CPE Routes */}
          <Route path="/pd-cpe" element={<ProfessionalDevelopment />} />
          <Route path="/pd-cpe/about" element={<PDAbout />} />
          <Route path="/pd-cpe/avenues" element={<ProfessionalAvenues />} />
          <Route path="/pd-cpe/publications" element={<PDPublications />} />
          <Route path="/pd-cpe/carr" element={<CARRCAR />} />
          <Route path="/pd-cpe/faqs" element={<PDFAQs />} />
          <Route path="/pd-cpe/cpe" element={<CPE />} />
          <Route path="/pd-cpe/mcbt" element={<MCBT />} />
          <Route path="/pd-cpe/mes" element={<MES />} />

          {/* Taxation Routes */}
          <Route path="/taxation" element={<Taxation />} />
          <Route path="/taxation/about" element={<TaxationAbout />} />
          <Route path="/taxation/publication" element={<TaxationPublication />} />
          <Route path="/taxation/courses" element={<TaxationCourses />} />
          <Route path="/taxation/gst" element={<GST />} />
          <Route path="/taxation/indirect" element={<IndirectTaxation />} />
          <Route path="/taxation/direct" element={<DirectTaxation />} />
          <Route path="/taxation/helpdesk" element={<TaxationHelpDesk />} />
          <Route path="/taxation/faq" element={<TaxationFAQ />} />
          <Route path="/taxation/contact" element={<TaxationContact />} />
          <Route path="/taxation/gst-services" element={<GSTServices />} />
          <Route path="/taxation/direct-taxation" element={<DirectTaxation />} />
          <Route path="/taxation/helpdesk" element={<TaxHelpdesk />} />

          {/* BFSI Routes */}
          <Route path="/bfsi" element={<BFSI />} />
          <Route path="/bfsi/about" element={<BFSIAbout />} />
          <Route path="/bfsi/publication" element={<BFSIPublication />} />
          <Route path="/bfsi/courses" element={<BFSICourses />} />
          <Route path="/bfsi/webinars" element={<BFSIWebinars />} />
          <Route path="/bfsi/helpdesk" element={<BFSIHelpDesk />} />
          <Route path="/bfsi/contact" element={<BFSIContact />} />

          {/* CAT Route */}
          <Route path="/cat" element={<CAT />} />

          {/* Advanced Studies Routes */}
          <Route path="/advanced-studies" element={<AdvancedStudies />} />
          <Route path="/advanced-studies/about" element={<AdvancedStudiesAbout />} />
          <Route path="/advanced-studies/courses" element={<AdvancedStudiesCourses />} />
          <Route path="/advanced-studies/examinations" element={<AdvancedStudiesExaminations />} />
          <Route path="/advanced-studies/publications" element={<AdvancedStudiesPublications />} />
          <Route path="/advanced-studies/research" element={<AdvancedStudiesResearch />} />
          <Route path="/advanced-studies/contact" element={<AdvancedStudiesContact />} />

          {/* Journal Routes */}
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/latest" element={<LatestJournals />} />
          <Route path="/journal/archive" element={<JournalArchive />} />
          <Route path="/journal/research" element={<ResearchPapers />} />
          <Route path="/journal/cases" element={<CaseStudies />} />
          <Route path="/journal/reports" element={<IndustryReports />} />

          {/* Industry Connect Routes */}
          <Route path="/industry-connect" element={<IndustryConnect />} />
          <Route path="/industry-connect/collaborations" element={<IndustryCollaborations />} />
          <Route path="/industry-connect/partnerships" element={<CorporatePartnerships />} />
          <Route path="/industry-connect/networks" element={<ProfessionalNetworks />} />
          <Route path="/industry-connect/events" element={<IndustryEvents />} />

          {/* DIP.MA Routes */}
          <Route path="/dipma" element={<DipMA />} />
          <Route path="/dipma/course" element={<DipMACourse />} />
          <Route path="/dipma/admission" element={<DipMAAdmission />} />
          <Route path="/dipma/curriculum" element={<DipMACurriculum />} />
          <Route path="/dipma/examination" element={<DipMAExamination />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
