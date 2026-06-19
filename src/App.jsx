import React, { useState, useEffect } from "react";
import Groq from "groq-sdk";
import "./App.css";

export default function App() {
  // Diet generation state (PRESERVED - existing functionality)
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [dietPlan, setDietPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDietForm, setShowDietForm] = useState(false);


  // Generate diet plan function (PRESERVED - existing functionality)
  const generateDietPlan = async () => {
    setLoading(true);

    try {
      const groq = new Groq({
        apiKey: import.meta.env.VITE_GROQ_API_KEY,
        dangerouslyAllowBrowser: false,
      });

      const response = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `
Create a personalized healthy diet plan.

Age: ${age}
Weight: ${weight} kg
Height: ${height} cm
Gender: ${gender}
Goal: ${goal}

Include:
- Breakfast
- Lunch
- Dinner
- Snacks
- Daily Calories
- Water Intake
- Health Tips

Return in a clean format.
`,
          },
        ],
        model: "llama-3.3-70b-versatile",
      });

      setDietPlan(
        response.choices[0]?.message?.content || "No response received."
      );
    } catch (error) {
      console.error(error);
      setDietPlan("Error generating diet plan.");
    }

    setLoading(false);
  };

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 20) {
        header?.classList.add('shadow-md');
        header?.classList.remove('shadow-sm');
      } else {
        header?.classList.add('shadow-sm');
        header?.classList.remove('shadow-md');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDietForm = () => {
    setShowDietForm(true);
    setTimeout(() => {
      document.getElementById('diet-form-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-background text-on-surface font-body-md">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-primary">NutriSmart</div>
          <nav className="hidden md:flex gap-6 items-center">
            <a className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors hover:bg-primary-container/10 rounded-lg px-3 py-1" href="#tips">Tips</a>
            <a className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors hover:bg-primary-container/10 rounded-lg px-3 py-1" href="#planner" onClick={(e) => { e.preventDefault(); scrollToDietForm(); }}>Planner</a>
            <a className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors hover:bg-primary-container/10 rounded-lg px-3 py-1" href="#testimonials">Dashboard</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={scrollToDietForm} className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95 shadow-md">Get Started</button>
            <button className="md:hidden text-primary p-2">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface-container-lowest">
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-container/20 text-primary px-4 py-1 rounded-full border border-primary-container">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <span className="text-sm font-medium">AI-Powered Nutrition</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-on-surface leading-tight">
                Eat Smart.<br />
                <span className="text-primary">Live Better.</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-md">
                Personalized diet tips for a healthier life. Our AI nutrition assistant builds the perfect plan for your unique goals and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button onClick={scrollToDietForm} className="bg-primary text-on-primary px-20 py-4 rounded-xl text-sm font-medium hover:shadow-lg transition-all hover:-translate-y-1">Get Started</button>
                <button onClick={scrollToDietForm} className="bg-surface border-2 border-primary text-primary px-20 py-4 rounded-xl text-sm font-medium hover:bg-primary-container/10 transition-all">Build Your Diet Plan</button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-4">
                  <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKRHJYWzT9jm2KqQKpDh3MGTrODdUaBGV-zlDBCRqOz1CdQ8m_Ydk-ILkNVfZaBMiJP45WvlFjbxJ0v4wZXhKV5vRdlsPXl7St60bT5sHxP25bOfFrglguIUgY-2Aymm0i6kr8Bp_4nWjtUSZHZCd4jZ_kKTXiU-_0qS8DfOKTo_iWCRU7lL3Gbk7kqaixAysHwxtqNxd99cJMcHlDHb_WSiJ0l25rwrp-vJcp0SIYK7lkgDkqQK_ggtdQ5XTg08zmgkgVvfob3sDp" alt="User 1" />
                  <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmY8syErf-P9tQ0R4bVDj2EpaHteD_nSl8j_p7g18b-A3uyjmv4mOBpUvGWpK0OigOOxGIEx69Tq-X3eqUVOOQ5e6m4dntHWU5udvoxUfaqV-HbGvddBeR3vKEL5c68FDEwQtVbf_oZr-wgf7nGDybL6eHjDDikCsq9ywqdD5DOcIsePMXOsdp9L_yLVk1yqrRsyuvMifWc6w9vPtsl-eb2RPBxxRisoZC7sZ7uWHV5BKjVMOXU8-SjBae0ycFjnznz3OdMSy1FB_8" alt="User 2" />
                  <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmbK-NV1OhCmEM3hhALNglbrrqpp6FYl5hq98Iu5rWwx_H0RQQtTvQFS1lmpwFjI0RhZ3vxoCTLgRZQ8ACtUOQf5-vWOhInPCfsgfbHGjt5duHFbxjgU8EcO4GpJSSmPSbFNohbSb30H266yfTNf3RH1hDZwdhU731ZB_JB76jPOBOjBC3WVqiDpnmYarb0ZAYdOYLmm74mntf2HKUotyMaJk8Wz826dlm-tedBGY6_EX27hZ-cYLrqitqxCkuyOeKDD1ex-XKyfwR" alt="User 3" />
                </div>
                <p className="text-sm font-medium text-on-surface-variant">
                  Joined by <span className="text-primary font-bold">12k+</span> health enthusiasts
                </p>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 p-4 rounded-[2.5rem] shadow-2xl overflow-hidden">
                <div className="w-full aspect-[4/5] rounded-[2rem] bg-cover bg-center mb-4" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCw9wHLyLVJWRDEGq61xuRUdLhRQymMdPfDYQFHnbtW-taHEtN4zc-6lEvSylGKRw-TnOcymSCj8NqiCxrh18SBJ5weu3gTRPXEg9ctcRftvXSF1gYv6bEVi6VSSN04EgAGHyE6_MUTxMQ7gYT6W917tErYrqwG_35HQ2Zjp5tbqPKDlup6DgLD5DEwXW4yOIFq909H-zGnVQO3wxfUGhUYww6_EAmxQNdo3jxJAaGy5k2XgH7ZITl-Cv-iOqznwXN_EVnryg39cRG2')" }}></div>
                
                {/* Floating Assistant Preview Card */}
                <div className="absolute bottom-10 -left-6 glass-card p-4 rounded-2xl shadow-xl max-w-[240px]">
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-on-surface">AI Assistant</p>
                      <p className="text-[13px] leading-snug text-on-surface-variant mt-1">"Based on your 5k run, I recommend a protein-rich lunch with complex carbs."</p>
                    </div>
                  </div>
                </div>

                {/* Nutritional Breakdown Card */}
                <div className="absolute top-10 -right-6 glass-card p-4 rounded-2xl shadow-xl">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center gap-8">
                      <span className="text-xs font-semibold">Daily Goals</span>
                      <span className="text-primary font-bold text-xs">74%</span>
                    </div>
                    <div className="w-32 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '74%' }}></div>
                    </div>
                    <div className="flex gap-2 mt-1">
                      <span className="bg-primary-container/30 text-on-primary-container text-[10px] px-2 py-0.5 rounded-full font-bold">CARBS</span>
                      <span className="bg-secondary-container/30 text-on-secondary-container text-[10px] px-2 py-0.5 rounded-full font-bold">PROTEIN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Diet Tips Section */}
        <section id="tips" className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold text-on-surface mb-3">Daily Diet Tips</h2>
                <p className="text-base text-on-surface-variant">Small changes lead to big results. Explore our curated selection of nutritional wisdom tailored to your metabolism.</p>
              </div>
              <button className="flex items-center gap-2 text-primary text-sm font-medium hover:translate-x-1 transition-transform">
                See All Insights <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6 snap-x">
              {/* Tip Card 1 */}
              <div className="min-w-[300px] md:min-w-[380px] snap-start bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-3xl">water_drop</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Hydration Timing</h3>
                <p className="text-base text-on-surface-variant mb-6">Drinking 500ml of water 30 minutes before meals can boost metabolism by up to 30%.</p>
                <div className="flex items-center gap-2 text-secondary text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm">schedule</span> 2 min read
                </div>
              </div>

              {/* Tip Card 2 */}
              <div className="min-w-[300px] md:min-w-[380px] snap-start bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">The Fiber Factor</h3>
                <p className="text-base text-on-surface-variant mb-6">Swap white rice for quinoa or farro to increase satiety and stabilize your blood sugar levels.</p>
                <div className="flex items-center gap-2 text-primary text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm">trending_up</span> Metabolism
                </div>
              </div>

              {/* Tip Card 3 */}
              <div className="min-w-[300px] md:min-w-[380px] snap-start bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 rounded-2xl bg-tertiary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-tertiary text-3xl">eco</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Green Energy</h3>
                <p className="text-base text-on-surface-variant mb-6">Adding a handful of spinach to your morning smoothie provides essential Vitamin K without altering the taste.</p>
                <div className="flex items-center gap-2 text-tertiary text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm">bolt</span> Energy Boost
                </div>
              </div>

              {/* Tip Card 4 */}
              <div className="min-w-[300px] md:min-w-[380px] snap-start bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-3xl">bedtime</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Sleep & Snacks</h3>
                <p className="text-base text-on-surface-variant mb-6">Avoid heavy meals 3 hours before bed. Opt for magnesium-rich pumpkin seeds if hungry.</p>
                <div className="flex items-center gap-2 text-secondary text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm">nightlight</span> Recovery
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Diet Plan Generator Section - PRESERVED FUNCTIONALITY */}
        {showDietForm && (
          <section id="diet-form-section" className="py-20 bg-gradient-to-b from-surface to-surface-container-low">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-on-surface mb-4">AI Diet Plan Generator</h2>
                <p className="text-lg text-on-surface-variant">Get your personalized nutrition plan powered by AI</p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-outline-variant/20">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-on-surface mb-2">Age</label>
                    <input type="number" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-on-surface mb-2">Weight (kg)</label>
                    <input type="number" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-on-surface mb-2">Height (cm)</label>
                    <input type="number" placeholder="Enter your height" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-on-surface mb-2">Gender</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer">
                      <option value="">Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-on-surface mb-2">Fitness Goal</label>
                    <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer">
                      <option value="">Select Your Goal</option>
                      <option>Weight Loss</option>
                      <option>Weight Gain</option>
                      <option>Muscle Gain</option>
                      <option>Maintain Weight</option>
                    </select>
                  </div>
                </div>

                <button onClick={generateDietPlan} disabled={loading} className="w-full mt-8 bg-primary text-on-primary px-8 py-4 rounded-xl text-base font-semibold hover:shadow-lg transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      Generating Your Plan...
                    </span>
                  ) : (
                    'Generate My Diet Plan'
                  )}
                </button>

                {/* Diet Plan Result - PRESERVED WITH ENHANCED STYLING */}
                {dietPlan && (
                  <div className="mt-8 bg-gradient-to-br from-primary-container/10 to-secondary-container/10 border-2 border-primary-container rounded-3xl p-6 md:p-10 shadow-xl animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-fixed-dim flex items-center justify-center shadow-lg">
                        <span className="material-symbols-outlined text-on-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant_menu</span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-on-surface">Your Personalized Diet Plan</h3>
                        <p className="text-sm text-on-surface-variant mt-1">AI-generated nutrition plan tailored for you</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-outline-variant/20">
                      <div className="diet-plan-content space-y-6">
                        {dietPlan.split('\n').map((line, index) => {
                          if (line.trim().startsWith('###') || line.trim().startsWith('**')) {
                            const headerText = line.replace(/###|\*\*/g, '').trim();
                            const iconMap = {
                              'Breakfast': 'breakfast_dining',
                              'Lunch': 'lunch_dining',
                              'Dinner': 'dinner_dining',
                              'Snack': 'fastfood',
                              'Calorie': 'local_fire_department',
                              'Water': 'water_drop',
                              'Health': 'health_and_safety',
                              'Tip': 'tips_and_updates',
                              'Daily': 'calendar_today',
                              'Meal': 'restaurant'
                            };
                            
                            let icon = 'circle';
                            for (let key in iconMap) {
                              if (headerText.toLowerCase().includes(key.toLowerCase())) {
                                icon = iconMap[key];
                                break;
                              }
                            }
                            
                            return (
                              <div key={index} className="flex items-center gap-3 pt-4 border-t border-outline-variant/30 first:border-0 first:pt-0">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                  <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
                                </div>
                                <h4 className="text-xl font-bold text-primary">{headerText}</h4>
                              </div>
                            );
                          } else if (line.trim()) {
                            if (line.trim().startsWith('*') || line.trim().startsWith('-')) {
                              const content = line.replace(/^\*|-/, '').trim();
                              return (
                                <div key={index} className="flex gap-3 ml-4 group">
                                  <span className="text-primary mt-1.5 group-hover:scale-125 transition-transform">•</span>
                                  <p className="text-base text-on-surface leading-relaxed flex-1">{content}</p>
                                </div>
                              );
                            } else {
                              return (
                                <p key={index} className="text-base text-on-surface-variant leading-relaxed ml-4">
                                  {line}
                                </p>
                              );
                            }
                          }
                          return null;
                        })}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-8 border-t border-outline-variant/30">
                        <button onClick={() => window.print()} className="flex-1 bg-primary text-on-primary px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-xl">print</span>
                          Print Plan
                        </button>
                        <button onClick={() => { navigator.clipboard.writeText(dietPlan); alert('Diet plan copied to clipboard!'); }} className="flex-1 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-xl">content_copy</span>
                          Copy to Clipboard
                        </button>
                        <button onClick={() => { setDietPlan(''); setAge(''); setWeight(''); setHeight(''); setGender(''); setGoal(''); }} className="flex-1 bg-surface border-2 border-outline-variant text-on-surface px-6 py-3 rounded-xl font-medium hover:bg-surface-container transition-all flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-xl">refresh</span>
                          New Plan
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl font-semibold text-on-surface mb-3">Success Stories</h2>
            <p className="text-base text-on-surface-variant max-w-2xl mx-auto">Join thousands of users who transformed their relationship with food using NutriSmart's data-driven approach.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center relative">
              <div className="absolute -top-6 w-12 h-12 bg-primary flex items-center justify-center rounded-full text-white shadow-lg">
                <span className="material-symbols-outlined">format_quote</span>
              </div>
              <img className="w-20 h-20 rounded-full object-cover border-4 border-surface-container mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGl2hmKTwOOkP9FCmhhgWCpdzI0DuKRrLmx1xhrrjCaTvgqdHAh1rMVmQFGWXG7FAMvkVGS4Q3DGEFsr_DSK6r9buvJr2F9VW2i99Z7tU3GDOpZhP5xqAOgEXklvq5n5dcprnrXjW9HSOn6VXOYigDG5kK8b_PjwMsD8Gcgvb3CsU_SrjjbM6rxn-zKs7Btkwr_MvKJXME-XzpGb099zHGJtJ1DHlqgCdP8s2d-Y7tkOxSpKWGWZ0-MSc6t8NivJv8IJJS_NrQiNu6" alt="Sarah J." />
              <p className="text-base italic text-on-surface mb-6">"NutriSmart didn't just give me a list of foods; it gave me a new way of thinking about energy. I've never felt more vibrant or focused."</p>
              <h4 className="text-sm font-bold text-on-surface">Sarah J.</h4>
              <span className="text-xs text-on-surface-variant">Lost 15lbs & Gained Vitality</span>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center relative border-2 border-primary-container">
              <div className="absolute -top-6 w-12 h-12 bg-primary flex items-center justify-center rounded-full text-white shadow-lg">
                <span className="material-symbols-outlined">format_quote</span>
              </div>
              <img className="w-20 h-20 rounded-full object-cover border-4 border-surface-container mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqv274o0P-3cL2vAAErobTOwX6fTjqUijP9DhzAS7cBatD4FhX52rf_pCk-BMRr1Z2u4rPFrErgNqXIIpVZ5l-pRhBjZxXu3HqJclRRsiK5_PvC52LTXKPpR1XsULTM6tY3JNdH95A7APy-761ptJpOdemO_onbGudLb0OSBjQq7XxwKtfU0u-aWhL5XKUnILGKlsSGQwj2GnIktKoXgLca5hib5Vic0uyYMt-sWtwlgGozoP2ez71UiFoLqDyBlyGKu_eGNRz8vtk" alt="Mark R." />
              <p className="text-base italic text-on-surface mb-6">"The AI assistant is like having a nutritionist in my pocket. It's so intuitive and actually understands my busy corporate schedule."</p>
              <h4 className="text-sm font-bold text-on-surface">Mark R.</h4>
              <span className="text-xs text-on-surface-variant">Improved Muscle Retention</span>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center relative">
              <div className="absolute -top-6 w-12 h-12 bg-primary flex items-center justify-center rounded-full text-white shadow-lg">
                <span className="material-symbols-outlined">format_quote</span>
              </div>
              <img className="w-20 h-20 rounded-full object-cover border-4 border-surface-container mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNSvw_ol5qFCYAPCmW2xuBUdMTjCO3etjRT37CznLef6PM1h8KAY2isjVSRlhR81mAwXW2DzaftWmld9lkNWqP-WhlNAsHK4dZ6qGlIqjsiGDbPyXXOhX2PeRszi6sbMd8H5AN3sz9RDVC7s9r32yLmjb_U-iOTahi_W-5aVETpCQdbsT90AfLY7y_Luur_q1qEIKHD7Ou028pA2xa_abfjgGgvobYdQGzx4Lds5fX3xmKK_REaBnjdLqkSo1lSOfmGSZcvrNkdtFx" alt="Elena G." />
              <p className="text-base italic text-on-surface mb-6">"I finally broke my plateau! The daily tips are so practical and easy to implement into my morning routine without feeling like a chore."</p>
              <h4 className="text-sm font-bold text-on-surface">Elena G.</h4>
              <span className="text-xs text-on-surface-variant">Overcame 2-year Plateau</span>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="bg-primary p-12 md:p-20 rounded-[3rem] shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <h2 className="text-3xl font-semibold text-on-primary mb-6 relative z-10">Ready to start your journey?</h2>
              <p className="text-lg text-on-primary/80 mb-12 max-w-xl mx-auto relative z-10">Join NutriSmart today and get your first personalized 30-day nutrition plan for free.</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                <button onClick={scrollToDietForm} className="bg-white text-primary px-20 py-4 rounded-xl text-base font-semibold shadow-lg hover:bg-surface-bright transition-colors">Create My Profile</button>
                <button className="bg-primary-container/20 border-2 border-white/40 text-white px-20 py-4 rounded-xl text-base font-semibold hover:bg-white/10 transition-colors">Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-outline-variant/30 bg-surface-container-lowest">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto opacity-90 hover:opacity-100 transition-opacity">
          <div className="col-span-1 lg:col-span-1">
            <div className="text-2xl font-bold text-primary mb-3">NutriSmart</div>
            <p className="text-base text-on-surface-variant">Intelligent nutrition for modern lives. Powered by science, delivered with care.</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-primary mb-6">Product</h4>
            <ul className="flex flex-col gap-2">
              <li><a className="text-base text-on-surface-variant hover:underline decoration-secondary transition-colors" href="#tips">Daily Tips</a></li>
              <li><a className="text-base text-on-surface-variant hover:underline decoration-secondary transition-colors" href="#planner">Meal Planner</a></li>
              <li><a className="text-base text-on-surface-variant hover:underline decoration-secondary transition-colors" href="#">AI Assistant</a></li>
              <li><a className="text-base text-on-surface-variant hover:underline decoration-secondary transition-colors" href="#">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-primary mb-6">Resources</h4>
            <ul className="flex flex-col gap-2">
              <li><a className="text-base text-on-surface-variant hover:underline decoration-secondary transition-colors" href="#">Nutrition Science</a></li>
              <li><a className="text-base text-on-surface-variant hover:underline decoration-secondary transition-colors" href="#">Blog</a></li>
              <li><a className="text-base text-on-surface-variant hover:underline decoration-secondary transition-colors" href="#">Health Community</a></li>
              <li><a className="text-base text-on-surface-variant hover:underline decoration-secondary transition-colors" href="#">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-primary mb-6">Company</h4>
            <ul className="flex flex-col gap-2">
              <li><a className="text-base text-on-surface-variant hover:underline decoration-secondary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="text-base text-on-surface-variant hover:underline decoration-secondary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="text-base text-on-surface-variant hover:underline decoration-secondary transition-colors" href="#">Contact Support</a></li>
              <li><a className="text-base text-on-surface-variant hover:underline decoration-secondary transition-colors" href="#">Press Kit</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-outline-variant/10 text-center">
          <p className="text-base text-on-surface-variant">© 2024 NutriSmart Wellness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
