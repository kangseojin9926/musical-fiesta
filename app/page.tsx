'use client';

import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Star, Users, Zap, BookOpen, Target, Trophy } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              GrowCampus
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition font-medium">주요 기능</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600 transition font-medium">후기</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition font-medium">FAQ</a>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-600/20 transition">
              시작하기
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-blue-50 via-white to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block mb-8 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-700 font-semibold text-sm flex items-center gap-2">
              <Zap size={16} /> 2000+ 대학생이 선택했어요
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            대학 생활을 바꾸는 <br/>
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              단 하나의 자기계발 습관
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            학점 관리부터 대외활동, 포트폴리오까지. <br/>
            <span className="font-semibold">같은 목표를 가진 대학생들과 함께 성장하세요.</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:shadow-blue-600/30 transition transform hover:scale-105 flex items-center justify-center gap-2">
              지금 무료로 시작하기
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-gray-300 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition text-gray-900">
              서비스 둘러보기
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-blue-600">2000+</div>
              <p className="text-sm text-gray-600 mt-1">활동 중인 사용자</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <p className="text-sm text-gray-600 mt-1">스터디 그룹</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">4.8★</div>
              <p className="text-sm text-gray-600 mt-1">평균 평점</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              왜 <span className="text-blue-600">GrowCampus</span>인가요?
            </h2>
            <p className="text-xl text-gray-600">대학생의 성장을 위한 모든 기능을 한 곳에서</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Target size={32} className="text-blue-600" />}
              title="맞춤형 로드맵" 
              desc="전공과 관심사에 맞는 커리어 패스를 인공지능이 제안해 드립니다."
              color="blue"
            />
            <FeatureCard 
              icon={<Users size={32} className="text-purple-600" />}
              title="스터디 매칭" 
              desc="혼자 하면 힘든 공부, 목표가 같은 캠퍼스 동료를 찾아드려요."
              color="purple"
            />
            <FeatureCard 
              icon={<Trophy size={32} className="text-amber-600" />}
              title="실전 포트폴리오" 
              desc="나의 활동이 자동으로 기록되어 매력적인 포트폴리오가 됩니다."
              color="amber"
            />
          </div>

          {/* Additional Features */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">더 많은 기능들</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={18} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">학점 GPA 관리 및 예측</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={18} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">대외활동 정보 큐레이션</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={18} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">AI 기반 자기소개서 피드백</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={18} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">스터디 그룹 매칭</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen size={64} className="text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">모든 기능이 무료로 제공됩니다</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">사용자 후기</h2>
            <p className="text-xl text-gray-600">GrowCampus와 함께 성장 중인 대학생들의 이야기</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 hover:shadow-lg transition">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{review.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.major}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            2024학년도 가장 핫한 대학생 자기계발 플랫폼에 지금 가입하세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition flex items-center justify-center gap-2">
              무료 가입하기
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition">
              더 알아보기
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">자주 묻는 질문</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">G</span>
                </div>
                <span className="font-bold text-gray-900">GrowCampus</span>
              </div>
              <p className="text-sm text-gray-600">대학생의 성장을 돕는 플랫폼</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">서비스</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition">주요 기능</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">가격</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">회사</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition">소개</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">블로그</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">법적</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition">개인정보처리방침</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">이용약관</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-gray-600 text-sm">
            <p>© 2024 GrowCampus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  desc, 
  color 
}: { 
  icon: React.ReactNode;
  title: string; 
  desc: string;
  color: 'blue' | 'purple' | 'amber';
}) {
  const bgColor = {
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
    amber: 'bg-amber-50'
  }[color];

  return (
    <div className={`${bgColor} p-8 rounded-2xl hover:shadow-xl transition transform hover:scale-105`}>
      <div className="mb-4 inline-block p-3 bg-white rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition text-left"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <ChevronRight 
          size={24} 
          className={`text-blue-600 transition transform ${isOpen ? 'rotate-90' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
}

const reviews = [
  {
    name: "이민준",
    major: "컴퓨터공학과",
    rating: 5,
    text: "GrowCampus 덕분에 학점 관리와 대외활동을 효율적으로 하게 됐어요. 특히 스터디 매칭이 정말 유용해서 같은 목표를 가진 친구들을 만날 수 있었습니다!"
  },
  {
    name: "박지현",
    major: "경영학과",
    rating: 5,
    text: "AI 기반 로드맵이 제 진로를 명확하게 해줬어요. 무료로 이 정도 기능을 제공하다니 놀랐습니다. 모든 대학생에게 추천해요!"
  },
  {
    name: "김서연",
    major: "마케팅과",
    rating: 5,
    text: "포트폴리오 자동 생성 기능이 정말 편해요. 제 활동들이 자동으로 정리되니까 이력서 작성할 때 시간이 많이 절약됐어요."
  }
];

const faqs = [
  {
    question: "GrowCampus는 정말 무료인가요?",
    answer: "네, 모든 기본 기능이 완전히 무료입니다! 학점 관리, 스터디 매칭, 포트폴리오 생성 등 모든 핵심 기능을 무료로 이용할 수 있습니다."
  },
  {
    question: "가입 후 언제부터 사용할 수 있나요?",
    answer: "가입을 완료하면 즉시 모든 기능을 사용할 수 있습니다. 별도의 인증 절차나 대기 시간이 없습니다."
  },
  {
    question: "어떤 대학교 학생들이 사용할 수 있나요?",
    answer: "전국의 모든 4년제 대학, 전문대학 학생들이 가입할 수 있습니다. 재학증명서를 통해 간단하게 인증됩니다."
  },
  {
    question: "스터디 그룹은 어떻게 매칭되나요?",
    answer: "당신의 관심사, 전공, 목표를 기반으로 AI가 최적의 학습 파트너를 추천해줍니다. 프로필 작성 후 3일 이내에 매칭이 완료됩니다."
  },
  {
    question: "개인정보는 안전하게 보호되나요?",
    answer: "네, 모든 개인정보는 암호화되어 보관되며, GDPR 기준을 준수합니다. 당신의 데이터는 절대 제3자와 공유되지 않습니다."
  },
  {
    question: "삭제하려면 어떻게 해야 하나요?",
    answer: "설정 메뉴에서 언제든지 계정을 삭제할 수 있습니다. 계정 삭제 시 모든 개인정보는 즉시 삭제됩니다."
  }
];
