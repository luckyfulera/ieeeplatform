'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const conferenceDate = new Date('2027-02-19T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = conferenceDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimerBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-xl border-2 border-primary/30 flex items-center justify-center">
        <div className="text-3xl sm:text-4xl font-bold text-primary">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <span className="text-sm font-semibold text-foreground/70">{label}</span>
    </div>
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="text-primary" size={24} />
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Conference Starts In
              </h2>
            </div>
            <p className="text-foreground/60 text-lg">Mark your calendar for the 1st IEEE Conference on AI-Driven Intelligent Systems</p>
          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-6 py-8">
            <TimerBox value={timeLeft.days} label="Days" />
            <div className="text-3xl sm:text-4xl font-bold text-primary/30">:</div>
            <TimerBox value={timeLeft.hours} label="Hours" />
            <div className="text-3xl sm:text-4xl font-bold text-primary/30">:</div>
            <TimerBox value={timeLeft.minutes} label="Minutes" />
            <div className="text-3xl sm:text-4xl font-bold text-primary/30">:</div>
            <TimerBox value={timeLeft.seconds} label="Seconds" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-lg bg-background border border-border">
              <div className="text-sm text-foreground/60 mb-1">Paper Submission Deadline</div>
              <div className="font-bold text-primary">November 2026</div>
            </div>
            <div className="p-4 rounded-lg bg-background border border-border">
              <div className="text-sm text-foreground/60 mb-1">Acceptance Notification</div>
              <div className="font-bold text-accent">December 2026</div>
            </div>
            <div className="p-4 rounded-lg bg-background border border-border">
              <div className="text-sm text-foreground/60 mb-1">Camera-Ready Submission</div>
              <div className="font-bold text-primary">January 2027</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
