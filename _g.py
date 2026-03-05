#!/usr/bin/env python3
import os
P = os.path.join(os.path.expanduser("~"), "zenith-site", "pages", "Events.tsx")
L = []
def a(x):
  L.append(x)
def w():
  with open(P,"w") as f: f.write(chr(10).join(L)+chr(10))
  print("Wrote",len(L),"lines")
a("import React from 'react';")
a("import { Link } from 'react-router-dom';")
a("")
a("const Events: React.FC = () => {")
a("  const agendaItems = [")
a("    { time: '8:00 AM', title: 'Check-In' },")
a("    { time: '8:30 AM', title: 'Welcome \\u0026 Framing' },")
a("    { time: '9:30 \\u2013 10:45 AM', title: 'Interactive Session' },")
a("    { time: '11:00 AM', title: 'Break' },")
a("    { time: '11:00 AM \\u2013 2:30 PM', title: 'Networking Happy Hour' },")
a("    { time: '2:30 PM', title: 'Closing Reflections' },")
a("    { time: '2:45 \\u2013 4:00 PM', title: 'Break' },")
a("    { time: '4:15 PM', title: 'Speakers' },")
a("    { time: '5:00 PM', title: 'Final Networking' },")
a("  ];")
