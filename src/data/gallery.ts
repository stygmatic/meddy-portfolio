export type FileType = 'image' | 'video' | 'text' | 'stl' | 'pdf' | 'docx' | 'other';

export interface ProjectFile {
  name: string;   // display name
  file: string;   // filename inside public/gallery/[slug]/
  type: FileType;
}

export interface GalleryProject {
  slug: string;
  title: string;
  description: string;
  cover?: string; // filename inside public/gallery/[slug]/ — used as card cover
  files: ProjectFile[];
}

export const projects: GalleryProject[] = [
  {
    slug: 'caelus',
    title: 'Caelus Industries',
    description: 'Autonomous defense platforms — hybrid drone ISR system and Mukagen counter-UAS weapon station with multi-sensor fusion on NVIDIA Jetson.',
    cover: 'Yemoja_preview.JPEG',
    files: [
      { name: 'Mukagen', file: 'Mukagen.png', type: 'image' },
      { name: 'Mukagen Preview', file: 'Mukagen_preview.png', type: 'image' },
      { name: 'Yemoja', file: 'Yemoja.JPEG', type: 'image' },
      { name: 'Yemoja Preview', file: 'Yemoja_preview.JPEG', type: 'image' },
      { name: 'Concept Render 1', file: 'Generated Image April 09, 2026 - 10_38PM.jpeg', type: 'image' },
      { name: 'Concept Render 2', file: 'Generated Image April 09, 2026 - 10_40PM.jpeg', type: 'image' },
      { name: 'Concept Render 3', file: 'Generated Image April 09, 2026 - 10_46PM.jpeg', type: 'image' },
      { name: 'Concept Render 4', file: 'Generated Image April 09, 2026 - 6_17PM.jpeg', type: 'image' },
      { name: 'Concept Render 5', file: 'Concept Render 5.png', type: 'image' },
      { name: 'Concept Render 6', file: 'Concept Render 6.png', type: 'image' },
      { name: 'Prototyping', file: 'Prototyping.png', type: 'image' },
      { name: 'Glider (3D Model)', file: 'glider.stl', type: 'stl' },
      { name: 'Mukagen Product Brochure', file: 'Mukagen - Product Brochure.docx', type: 'docx' },
      { name: 'Condor Product Brochure', file: 'Condor - Product Brochure.docx', type: 'docx' },
      { name: 'Hone Product Brochure', file: 'Hone - Product Brochure.docx', type: 'docx' },
    ],
  },
  {
    slug: 'horizon-avionics',
    title: 'Horizon Avionics',
    description: 'Flight computers for rockets and drones. Led a team of 10+ engineers through 500+ hours of R&D, secured 4 corporate partnerships.',
    cover: 'PNG image.png',
    files: [
      { name: 'PCB Design', file: 'PNG image.png', type: 'image' },
      { name: 'PCB Design 2', file: 'PNG image 2.png', type: 'image' },
      { name: 'Screenshot', file: 'Screenshot 2025-06-03 at 10.36.41 AM.png', type: 'image' },
      { name: 'Demo Video', file: '0001-0370.mp4', type: 'video' },
    ],
  },
  {
    slug: 'space-pickles',
    title: 'Space Pickles Rocketry',
    description: 'Nonprofit raising $20K+ to fund rockets and teach STEM to underserved communities. NASA/DoD AstroCamps partner. 500+ students taught.',
    cover: 'logo (1).png',
    files: [
      // Images
      { name: 'Aerial Photo', file: 'DJI_0017.JPG', type: 'image' },
      { name: 'Launch', file: '2-8 launch.webp', type: 'image' },
      { name: 'Launch (Alt)', file: '2_8 launch.WEBP', type: 'image' },
      { name: 'Launch Still', file: 'Still_2026-02-09_013022_1.1.8-2.JPG', type: 'image' },
      { name: 'Photo 1', file: 'IMG_9161.PNG', type: 'image' },
      { name: 'Photo 2', file: 'IMG_9183.PNG', type: 'image' },
      { name: 'Photo 3', file: 'IMG_4062.JPG', type: 'image' },
      { name: 'Photo 4', file: '1C658438-6D34-48C9-BDF8-F89FC2727766.JPG', type: 'image' },
      { name: 'Photo 5', file: '2C1686F2-62ED-4176-B86A-DAA0C7068058.JPG', type: 'image' },
      { name: 'Photo 6', file: '761F9FF8-91A6-4726-ABDE-90C71EE713BD.JPG', type: 'image' },
      { name: 'Photo 7', file: 'E38B223C-4F18-4453-81FE-3C04B6A09343.JPG', type: 'image' },
      { name: 'Photo 8', file: 'image.PNG', type: 'image' },
{ name: 'Screenshot 2', file: 'Screenshot 2026-04-04 at 4.18.30 PM.png', type: 'image' },
      { name: 'Camp Photo 1', file: 'IMG_1631.jpg', type: 'image' },
      { name: 'Camp Photo 2', file: 'IMG_1632.jpg', type: 'image' },
      { name: 'Camp Photo 3', file: 'IMG_1633.jpg', type: 'image' },
      { name: 'Camp Photo 4', file: 'IMG_2399.jpg', type: 'image' },
      { name: 'Camp Photo 5', file: 'IMG_8640.jpg', type: 'image' },
      { name: 'Camp Photo 6', file: 'IMG_9093.jpg', type: 'image' },
      { name: 'Camp Photo 7', file: 'IMG_9339.jpg', type: 'image' },
      { name: 'Camp Photo 8', file: 'IMG_9340.jpg', type: 'image' },
      { name: 'Camp Photo 9', file: 'IMG_9341.jpg', type: 'image' },
      { name: 'Camp Photo 10', file: 'IMG_9342.jpg', type: 'image' },
      { name: 'Camp Photo 11', file: 'IMG_9343.jpg', type: 'image' },
      { name: 'Camp Photo 12', file: 'IMG_9344.jpg', type: 'image' },
      { name: 'Camp Photo 13', file: 'IMG_9356.jpg', type: 'image' },
      { name: 'Camp Photo 14', file: 'IMG_9357.jpg', type: 'image' },
      { name: 'Camp Photo 15', file: 'IMG_9358.jpg', type: 'image' },
      { name: 'Camp Photo 16', file: 'IMG_9359.jpg', type: 'image' },
      { name: 'Camp Photo 17', file: 'IMG_9360.jpg', type: 'image' },
      { name: 'Camp Photo 18', file: 'IMG_9361.jpg', type: 'image' },
      { name: 'Camp Photo 19', file: 'IMG_9362.jpg', type: 'image' },
      { name: 'Camp Photo 20', file: 'IMG_9363.jpg', type: 'image' },
      { name: 'Camp Photo 21', file: 'IMG_9364.jpg', type: 'image' },
      { name: 'Camp Photo 22', file: 'IMG_9365.jpg', type: 'image' },
      { name: 'Camp Photo 23', file: 'IMG_9426.jpg', type: 'image' },
      { name: 'Camp Photo 24', file: 'IMG_9427.jpg', type: 'image' },
      { name: 'Camp Photo 25', file: 'IMG_9428.jpg', type: 'image' },
      // Videos
      { name: 'SRPC Recap', file: 'SRPC Recap.mp4', type: 'video' },
      { name: 'Aerial Video 1', file: 'DJI_0013.MP4', type: 'video' },
      { name: 'Aerial Video 2', file: 'DJI_0018.MP4', type: 'video' },
      { name: 'Aerial Video 3', file: 'DJI_0019.MP4', type: 'video' },
      { name: 'Aerial Video 4', file: 'DJI_0020.MP4', type: 'video' },
      { name: 'Experimental Motor', file: 'experimental motor.MP4', type: 'video' },
      { name: 'Timeline', file: 'Timeline 1.mov', type: 'video' },
      { name: 'Video 1', file: 'Untitled_video_9.MP4', type: 'video' },
      { name: 'Video 2', file: 'C0085.mov', type: 'video' },
      { name: 'Video 3', file: 'IMG_2398.MOV', type: 'video' },
      { name: 'Video 4', file: 'IMG_4671.mov', type: 'video' },
      { name: 'Video 5', file: 'IMG_8643.MOV', type: 'video' },
      { name: 'Video 6', file: 'IMG_9180.MOV', type: 'video' },
      { name: 'Video 7', file: 'PXL_20250308_110902218.TS.MP4', type: 'video' },
      // Docs
{ name: 'Kiya Final', file: 'kiya_final.docx', type: 'docx' },
    ],
  },
  {
    slug: 'payallio',
    title: 'Payallio',
    description: 'QR code platform enabling cashless donations for homeless individuals. Provisional patent filed. Presented to Oakland City Hall.',
    files: [],
  },
  {
    slug: 'uav-drone',
    title: 'UAV Drone Design',
    description: 'CFD-optimized fixed-wing UAV. Ran fluid dynamics simulations to maximize lift-to-drag ratio and minimize energy consumption.',
    files: [],
  },
  {
    slug: 'go-kart',
    title: 'Hybrid Go-Kart',
    description: 'Independently designed and built a hybrid go-kart with a novel dual-powertrain combining system that merges two independent RPM sources to a single axle.',
    files: [],
  },
];
