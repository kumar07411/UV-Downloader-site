/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev me phone (LAN IP) se website kholne ke liye zaroori —
  // iske bina JS load nahi hota aur animations wale section invisible rehte hain
  allowedDevOrigins: ["192.168.1.14", "localhost"],
};

export default nextConfig;
