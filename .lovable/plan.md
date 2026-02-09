

## Upravy webu dle pozadavku klienta

### 1. Odstranit "Cisteni interieru" ze sluzeb
- V `src/components/Services.tsx` odstranim kartu "Cisteni interieru" z pole `services` (radky 25-29)

### 2. Odstranit sekci "Povinne ruceni" z pojisteni
- V `src/components/InsuranceInfo.tsx` odstranim celou kartu "Potrebne doklady z povinneho ruceni" vcetne rozdeleni na vinika a poskozeneho (radky 25-69)
- V `src/components/Services.tsx` upravim text v sekci "Pojisteni" - odstranim zminku o povinnem ruceni, ponecham pouze pripojisteni

### 3. Zvyraznit kompletni reseni pojistne udalosti u pripojisteni
- V `src/components/InsuranceInfo.tsx` pridam vyrazny blok zduraznujici:
  - Kompletni vyrizeni pojistne udalosti od nahlaseni az po nafoceni
  - **Vymena skla je BEZPLATNA** pokud je sklo pripojisteno
  - Pojistne plneni si stahnu primo z pojistovny - zakaznik nic neplati

### 4. Upravit doklady u pripojisteni
- Odstranit "Ridicsky prukaz" ze seznamu potrebnych dokladu
- Zmenit "Velky technicky prukaz" na "Technicky prukaz"

---

### Technicke detaily

**Services.tsx:**
- Smazat objekt `{ icon: Sparkles, title: "Cisteni interieru", ... }` z pole
- Odebrat import `Sparkles`
- Upravit text v Insurance Info bloku - odstranit "povinneho ruceni nebo"

**InsuranceInfo.tsx:**
- Smazat celou Card komponentu pro povinne ruceni (radky 25-69)
- Odebrat import `Shield`
- Pridat novy vyrazny blok (styl podobny "Evening Service Highlight" - s primary barvou a glow efektem) s textem o bezplatne vymene a stahovani plneni z pojistovny
- V dokladech pro pripojisteni: odstranit ridicsky prukaz, zmenit "Velky technicky prukaz" na "Technicky prukaz"

