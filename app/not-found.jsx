import Button from './components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020101] text-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" 
           style={{ 
             backgroundImage: 'linear-gradient(#25494a 1px, transparent 1px), linear-gradient(90deg, #25494a 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Radial Gradient overlay to fade edges of the grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020101_80%)] z-0"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#99f36c] opacity-[0.03] rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-[#25494a] opacity-40 rounded-full blur-[80px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-[-5vh]">
        {/* Animated 404 Text */}
        <h1 className="text-[10rem] md:text-[15rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10 mb-2 drop-shadow-2xl">
          404
        </h1>
        
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 border border-[#99f36c]/30 bg-[#99f36c]/10 text-[#99f36c] px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase mb-6 shadow-[0_0_15px_rgba(153,243,108,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#99f36c] animate-pulse"></span>
          System Error
        </div>
        
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
          Connection Lost
        </h2>
        
        {/* Description */}
        <p className="text-[#d3d3d3] max-w-lg text-lg md:text-xl leading-relaxed mb-10">
          The grid seems to be offline in this sector. The page you are looking for has been moved, removed, or never existed.
        </p>
        
        {/* Action Button */}
        <Button 
          href="/" 
          text="Return to Grid" 
          className="bg-[#1b3738] border border-[#99f36c]/30 hover:border-[#99f36c]/80 hover:bg-[#25494a] pl-8 pr-2 py-2 max-w-[320px] backdrop-blur-sm shadow-[0_0_20px_rgba(153,243,108,0.1)] hover:shadow-[0_0_30px_rgba(153,243,108,0.2)] transition-all duration-300 hover:-translate-y-1"
          textClassName="text-white text-lg"
          iconSize="w-12 h-12"
          svgSize="w-6 h-6"
          iconBg="bg-[#99f36c] text-[#1b3738]"
        />
      </div>
    </div>
  );
}
