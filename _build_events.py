import os
os.chdir(os.path.expanduser("~/zenith-site"))
L = []
def a(s): L.append(s)
a("import React from 'react';")
a("import { Link } from 'react-router-dom';")
a("")
a("const Events: React.FC = () => {")
a("  const agendaItems = [")
a("    { time: '8:00 AM', title: 'Check-In' },")
a("    { time: '8:30 AM', title: 'Welcome & Framing' },")
