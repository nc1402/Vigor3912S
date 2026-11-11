/* AN PHÁT · DrayTek Vigor3912S · GitHub Pages release
   Mọi nút tư vấn / báo giá dẫn đến Google Forms, không có biểu mẫu giả. */
(() => {
  'use strict';
  const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScSM56ZVHF-ZzfcVAm9LuB1AHoc5-35wcTRRTK-Qw1XIHQ1vQ/viewform';
  document.querySelectorAll('[data-cta]').forEach(a => { a.href = FORM_URL; a.target = '_blank'; a.rel = 'noopener noreferrer'; });
  const toggle=document.getElementById('menu-toggle'), menu=document.getElementById('site-nav');
  toggle.addEventListener('click',()=> { const open=menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open));toggle.setAttribute('aria-label',open?'Đóng menu':'Mở menu'); });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=> {menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
  const riskCopy=[
    'Điểm nghẽn: chỉ một thiết bị gặp sự cố cũng có thể kéo theo gián đoạn dịch vụ quan trọng.',
    'Điểm nghẽn: thiếu cơ chế khoanh vùng tạo điều kiện cho mã độc tiếp tục di chuyển trong mạng.',
    'Điểm nghẽn: đội IT tốn thời gian xác minh cảnh báo và xử lý các thao tác lặp lại.'
  ];
  document.querySelectorAll('[data-risk]').forEach(btn => btn.addEventListener('click',()=> { let i=Number(btn.dataset.risk);document.querySelectorAll('[data-risk]').forEach(b=> {const selected=b===btn;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected))});document.querySelector('.risk-display').dataset.risk=String(i);document.getElementById('risk-insight').textContent=riskCopy[i];const ri=document.getElementById('risk-visual-img');ri.src='assets/images/threats/'+(i===1?'malware-lateral-movement.webp':'business-disruption.webp');ri.alt=i===1?'Nguy cơ mã độc lây lan ngang giữa các VLAN':'Nguy cơ gián đoạn hoạt động kinh doanh khi hệ thống gặp tấn công';}));
  const techs=[
    {kicker:'LỚP 01 / DETECTION',label:'SECURITY EVENT DETECTED',title:'Suricata 8.x – Nhận diện dấu hiệu tấn công',desc:'Hơn 60.000 rules theo tài liệu dự án để nhận diện malware, exploit, phishing, DoS và kết nối C&C. Log cung cấp Priority và Classification để đánh giá tiếp.',tag:'PHÁT HIỆN'},
    {kicker:'LỚP 02 / ANALYSIS',label:'NETWORK TELEMETRY',title:'Zeek – Hiểu rõ hành vi trên mạng',desc:'Phân tích và lưu log kết nối, DNS, HTTP, TLS để hỗ trợ truy vết và nhận diện các hành vi bất thường chưa thể hiện rõ qua chữ ký.',tag:'PHÂN TÍCH'},
    {kicker:'LỚP 03 / POLICY RESPONSE',label:'POLICY-BASED IP BLOCK',title:'Smart Action – Tự động chặn IP theo chính sách',desc:'Đọc cảnh báo/log và áp dụng điều kiện theo Priority, từ khóa hoặc REGEX để đưa IP nguồn hoặc đích vào danh sách chặn trên Router.',tag:'CHẶN IP'},
    {kicker:'LỚP 04 / ORCHESTRATION',label:'AUTOMATED CONTAINMENT',title:'DraySOAR – Điều phối phản ứng và cô lập',desc:'Kết hợp dữ kiện và kích hoạt Playbook để điều phối Gateway, Switch, AP hoặc DrayEDR hỗ trợ, giảm cơ hội lây lan nội bộ.',tag:'ĐIỀU PHỐI'}
  ];
  document.querySelectorAll('[data-tech]').forEach(btn=>btn.addEventListener('click',()=> {const t=techs[Number(btn.dataset.tech)];document.querySelectorAll('[data-tech]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-selected',String(b===btn));});['tech-kicker','tech-graphic-label','tech-title','tech-description','tech-tag'].forEach((id,i)=>document.getElementById(id).textContent=[t.kicker,t.label,t.title,t.desc,t.tag][i]);
    const techImages=[['suricata-ids-detection.webp','Suricata phân tích lưu lượng và phát hiện dấu hiệu tấn công'],['zeek-network-analysis.webp','Zeek ghi log DNS, HTTP, TLS và kết nối'],['smart-action-ip-block.webp','Smart Action chặn IP dựa trên log và điều kiện'],['draysoar-playbook-orchestration.webp','DraySOAR điều phối Router, Switch, Access Point theo Playbook']];
    const selected=techImages[Number(btn.dataset.tech)];const image=document.getElementById('tech-image');image.src='assets/images/security/'+selected[0];image.alt=selected[1];}));
  const demos=[
    {title:'Detect – Phát hiện dấu hiệu',description:'Suricata phát hiện dấu hiệu đáng ngờ. Zeek bổ sung ngữ cảnh kết nối để phục vụ đánh giá.',log:'[SURICATA] Alert: suspicious outbound connection',status:'ĐANG PHÁT HIỆN',alert:'! MALICIOUS CONNECTION'},
    {title:'Alert – Ghi nhận cảnh báo',description:'Cảnh báo đi kèm thông tin mức độ nghiêm trọng và đặc điểm kết nối, sẵn sàng cho quản trị viên hoặc hệ thống xử lý.',log:'[ALERT] Priority: 1 | Source: employee-PC',status:'ĐÃ CÓ CẢNH BÁO',alert:'! SECURITY EVENT'},
    {title:'Respond – Đánh giá điều kiện',description:'Smart Action hoặc Playbook DraySOAR kiểm tra Priority, thông tin IP và các ngưỡng đã cấu hình để chọn hành động phù hợp.',log:'[PLAYBOOK] Check: event severity + reputation',status:'ĐANG ĐIỀU PHỐI',alert:'⚙ POLICY EVALUATION'},
    {title:'Block – Chặn và cô lập',description:'Chặn IP tại Gateway hoặc gửi lệnh cô lập qua Switch, AP hay DrayEDR nếu môi trường và thiết bị hỗ trợ.',log:'[ACTION] IP block / endpoint isolation (simulated)',status:'ĐÃ CÔ LẬP (MÔ PHỎNG)',alert:'✓ CONTAINMENT SIMULATED'}
  ];
  let demoIndex=0, demoTimer=null;
  function selectDemo(index){demoIndex=index;const d=demos[index];document.getElementById('demo-title').textContent=d.title;document.getElementById('demo-description').textContent=d.description;document.getElementById('demo-log').textContent=d.log;document.getElementById('demo-progress').textContent=String(index+1).padStart(2,'0')+' / 04';document.getElementById('demo-indicator').textContent=d.status;document.getElementById('scene-alert').textContent=d.alert;document.getElementById('pc-state').textContent=index===3?'ĐÃ CÔ LẬP':'NGHI NHIỄM';document.querySelector('.demo-scene').classList.toggle('is-blocked',index===3);document.querySelectorAll('[data-demo-step]').forEach((b,i)=>{b.classList.toggle('active',i===index);b.setAttribute('aria-pressed',String(i===index));});document.getElementById('demo-next').textContent=index===3?'Chạy lại ↺':'Bước tiếp →';}
  function stopDemo(){if(demoTimer!==null){clearInterval(demoTimer);demoTimer=null;}document.getElementById('demo-play').textContent='▶ Chạy mô phỏng';}
  function playDemo(){if(demoTimer!==null){stopDemo();return;}if(demoIndex===3)selectDemo(0);document.getElementById('demo-play').textContent='Ⅱ Tạm dừng';demoTimer=setInterval(()=>{if(demoIndex>=3){stopDemo();return;}selectDemo(demoIndex+1);if(demoIndex===3)stopDemo();},1500);}
  document.querySelectorAll('[data-demo-step]').forEach(b=>b.addEventListener('click',()=>{stopDemo();selectDemo(Number(b.dataset.demoStep));}));document.getElementById('demo-play').addEventListener('click',playDemo);document.getElementById('demo-next').addEventListener('click',()=>{stopDemo();selectDemo((demoIndex+1)%4)});document.getElementById('demo-reset').addEventListener('click',()=>{stopDemo();selectDemo(0)});
  const nodes={
    0:['☁','Internet – Nguồn kết nối','Lưu lượng từ Internet đi qua Gateway, nơi các chính sách định tuyến và bảo mật được áp dụng.','Cải thiện khả năng kiểm soát lưu lượng ra/vào mạng.'],
    1:['▤','Vigor3912S – Gateway bảo mật','Giám sát luồng lưu lượng thực sự đi qua Router, sử dụng Smart Action để chặn IP nguồn hoặc IP đích theo cảnh báo và chính sách cấu hình.','Khoanh vùng kết nối đáng ngờ ngay từ điểm kiểm soát tập trung.'],
    2:['▥','Switch DrayTek – Cô lập kết nối có dây','Khi Playbook xác định thiết bị nguy cơ, DraySOAR có thể tắt cổng Switch hỗ trợ theo điều kiện và cấu hình quản lý.','Hạn chế thiết bị nghi nhiễm tiếp tục kết nối tới tài nguyên khác.'],
    3:['◉','AP DrayTek – Cô lập thiết bị Wi-Fi','Có thể áp dụng hành động kiểm soát hoặc cô lập thiết bị Wi-Fi nghi nhiễm trên AP và firmware được hỗ trợ.','Giảm nguy cơ lan truyền qua lớp truy cập không dây.'],
    4:['▣','PC / DrayEDR – Cô lập máy trạm','Khi đã triển khai DrayEDR tương thích, Playbook có thể phối hợp cô lập máy trạm theo chính sách.','Hạn chế máy trạm nguy cơ ảnh hưởng thêm các hệ thống trong doanh nghiệp.']
  };
  document.querySelectorAll('[data-node]').forEach(btn=>btn.addEventListener('click',()=> {const n=nodes[Number(btn.dataset.node)];document.querySelectorAll('[data-node]').forEach(b=>b.classList.toggle('active',b===btn));['topo-icon','topo-title','topo-description','topo-value'].forEach((id,i)=>document.getElementById(id).textContent=n[i]);}));
  const specs={security:[['Suricata 8.x','Hơn 60.000 security rules¹'],['Zeek','Log kết nối & giao thức'],['Smart Action','Chặn IP theo log / điều kiện'],['DraySOAR','Phản ứng theo Playbook và hạ tầng hỗ trợ']],platform:[['Docker','Nền tảng ứng dụng mở¹'],['SSD','Dung lượng 256GB¹'],['VPN','Tối đa 500 kênh đồng thời¹'],['LAN/VLAN','Tối đa 100 subnet/VLAN¹']],management:[['Access Point','Quản lý tối đa 50 AP DrayTek¹'],['Switch','Quản lý tối đa 30 Switch DrayTek¹'],['Quản trị sự cố','Log, cảnh báo và Playbook'],['Điều kiện thực tế','Phụ thuộc firmware, model, thiết kế mạng']]};
  document.querySelectorAll('[data-spec]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-spec]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-selected',String(b===btn))});document.getElementById('spec-content').innerHTML=specs[btn.dataset.spec].map(([a,b])=>`<div class="spec-row"><b>${a}</b><span>${b}</span></div>`).join('')}));
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const art=document.getElementById('hero-art');art.addEventListener('pointermove',event=>{if(window.matchMedia('(max-width: 950px)').matches) return;const r=art.getBoundingClientRect();const x=(event.clientX-r.left)/r.width-.5,y=(event.clientY-r.top)/r.height-.5;art.style.transform=`rotateY(${x*5}deg) rotateX(${-y*4}deg)`;});art.addEventListener('pointerleave',()=>{art.style.transform='';});}

  // Back-to-top, non-blocking, respects reduced-motion preference.
  const back=document.getElementById('back-to-top');
  if(back){const update=()=>back.classList.toggle('visible',window.scrollY>600);window.addEventListener('scroll',update,{passive:true});update();back.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));}
  // Keep image transitions accessible and avoid unstable href behavior.
})();
