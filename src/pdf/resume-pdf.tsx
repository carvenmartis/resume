import React from 'react'
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  Svg,
  Polygon,
} from '@react-pdf/renderer'
import {
  ResumeData,
  type ProfileProps,
  type Experience,
  type HobbyProps,
} from '@/types/resume'

const THEME = '#8ea59b'
const THEME_LIGHT = '#c6d1cd'
const TEXT_DARK = '#171717'
const GRAY_600 = '#4b5563'
const GRAY_700 = '#374151'

// A4: 595pt × 842pt
const PAGE_W = 595
const HEADER_H = 90
const FOOTER_H = 26
const PAD_H = 30   // horizontal padding inside content area
const COL_GAP = 10
const LEFT_W = Math.round((PAGE_W - PAD_H * 2) * 0.25)
const RIGHT_W = PAGE_W - PAD_H * 2 - COL_GAP - LEFT_W

const s = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },

  // ── Header ──────────────────────────────────────────────
  headerWrap: {
    height: HEADER_H,
    position: 'relative',
  },
  headerText: {
    position: 'absolute',
    top: 20,
    left: 42,
    flexDirection: 'column',
  },
  headerName: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_DARK,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  headerPrefix: {
    fontSize: 10,
    color: TEXT_DARK,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: 5,
  },
  headerImage: {
    position: 'absolute',
    top: 10,
    right: 55,
    width: 64,
    height: 64,
    borderRadius: 32,
  },

  // ── Content ──────────────────────────────────────────────
  content: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: PAD_H,
    paddingTop: 18,
    gap: COL_GAP,
  },
  leftPanel: {
    width: LEFT_W,
    flexDirection: 'column',
    gap: 18,
  },
  rightPanel: {
    width: RIGHT_W,
    flexDirection: 'column',
    gap: 14,
  },
  centerPanel: {
    flex: 1,
    flexDirection: 'column',
    gap: 14,
  },

  // ── Section title (h3) ────────────────────────────────────
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 5,
  },

  // ── Contact ───────────────────────────────────────────────
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  contactBullet: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: THEME,
  },
  contactText: {
    fontSize: 7.5,
    color: TEXT_DARK,
    flex: 1,
  },

  // ── Card (education / certification) ──────────────────────
  cardList: {
    gap: 8,
  },
  cardTitle: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_DARK,
  },
  cardSub: {
    fontSize: 7,
    fontFamily: 'Helvetica',
    color: GRAY_600,
    marginTop: 1,
  },

  // ── Profile ───────────────────────────────────────────────
  profileText: {
    fontSize: 7.5,
    color: GRAY_600,
    lineHeight: 1.4,
    textAlign: 'justify',
  },

  // ── Experience ────────────────────────────────────────────
  expList: {
    gap: 10,
  },
  expHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  expName: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_DARK,
  },
  expPeriod: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_DARK,
    textTransform: 'uppercase',
  },
  expDesc: {
    fontSize: 7.5,
    color: GRAY_700,
    lineHeight: 1.4,
    textAlign: 'justify',
    marginTop: 3,
    marginBottom: 3,
  },
  expKeywordsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  expKeywordsLabel: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: TEXT_DARK,
  },
  expKeywordsText: {
    fontSize: 7,
    color: GRAY_700,
    flex: 1,
  },

  // ── Skills ────────────────────────────────────────────────
  skillsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  skillBadge: {
    backgroundColor: THEME_LIGHT,
    color: GRAY_700,
    fontSize: 7,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 2,
  },

  // ── Languages ────────────────────────────────────────────
  langItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  langName: {
    fontSize: 7.5,
    color: GRAY_700,
  },
  langDots: {
    flexDirection: 'row',
    gap: 4,
  },
  langDot: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    height: FOOTER_H,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: PAD_H,
  },
  footerText: {
    fontSize: 8,
    color: GRAY_600,
  },
})

// ── Sub-components ────────────────────────────────────────

function PDFHeader({ profile, image }: { profile: ProfileProps; image?: string }) {
  return (
    <View style={s.headerWrap}>
      <Svg
        width={PAGE_W}
        height={HEADER_H}
        viewBox={`0 0 ${PAGE_W} ${HEADER_H}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <Polygon
          points={`0,0 ${PAGE_W},0 ${PAGE_W},${HEADER_H / 2} 0,${HEADER_H}`}
          fill={THEME}
        />
      </Svg>
      <View style={s.headerText}>
        <Text style={s.headerName}>{profile.firstName} {profile.lastName}</Text>
        <Text style={s.headerPrefix}>{profile.prefix}</Text>
      </View>
      {image && <Image style={s.headerImage} src={image} />}
    </View>
  )
}

function PDFFooter({ pageNumber }: { pageNumber: number }) {
  return (
    <View style={s.footer}>
      <Text style={s.footerText}>{pageNumber}</Text>
    </View>
  )
}

function ContactSection() {
  const { contact } = ResumeData
  return (
    <View>
      <Text style={s.sectionTitle}>Contact</Text>
      {contact.location && (
        <View style={s.contactItem}>
          <View style={s.contactBullet} />
          <Text style={s.contactText}>{contact.location}</Text>
        </View>
      )}
      {contact.phone && (
        <View style={s.contactItem}>
          <View style={s.contactBullet} />
          <Text style={s.contactText}>{contact.phone}</Text>
        </View>
      )}
      {contact.email && (
        <View style={s.contactItem}>
          <View style={s.contactBullet} />
          <Text style={s.contactText}>{contact.email}</Text>
        </View>
      )}
    </View>
  )
}

function EducationSection() {
  return (
    <View>
      <Text style={s.sectionTitle}>Education</Text>
      <View style={s.cardList}>
        {ResumeData.degrees.map((d, i) => (
          <View key={i}>
            <Text style={s.cardTitle}>{d.title}</Text>
            <Text style={s.cardSub}>{d.school}{d.city ? `, ${d.city}` : ''}</Text>
            <Text style={s.cardSub}>{d.endDate}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

function CertificationSection() {
  return (
    <View>
      <Text style={s.sectionTitle}>Trainingen</Text>
      <View style={s.cardList}>
        {ResumeData.certifications.map((c, i) => (
          <View key={i}>
            <Text style={s.cardTitle}>{c.title}</Text>
            <Text style={s.cardSub}>{c.company}</Text>
            <Text style={s.cardSub}>{c.date}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

function ProfileSection() {
  return (
    <View>
      <Text style={s.sectionTitle}>Profile</Text>
      <Text style={s.profileText}>{ResumeData.profile.summary}</Text>
    </View>
  )
}

function HobbyItem({ hobby }: { hobby: HobbyProps }) {
  return (
    <View>
      <Text style={s.expName}>{hobby.name}</Text>
      <Text style={s.expDesc}>{hobby.description}</Text>
      {hobby.technologies.length > 0 && (
        <View style={s.expKeywordsRow}>
          <Text style={s.expKeywordsLabel}>Keywords: </Text>
          <Text style={s.expKeywordsText}>{hobby.technologies.join(', ')}</Text>
        </View>
      )}
    </View>
  )
}

function ExpItem({ exp }: { exp: Experience }) {
  return (
    <View>
      <View style={s.expHeaderRow}>
        <Text style={s.expName}>{exp.position}{exp.company ? ` (${exp.company})` : ''}</Text>
        <Text style={s.expPeriod}>{exp.period}</Text>
      </View>
      <Text style={s.expDesc}>{exp.description}</Text>
      {exp.technologies.length > 0 && (
        <View style={s.expKeywordsRow}>
          <Text style={s.expKeywordsLabel}>Keywords: </Text>
          <Text style={s.expKeywordsText}>{exp.technologies.join(', ')}</Text>
        </View>
      )}
    </View>
  )
}

function HobbySection() {
  return (
    <View>
      <Text style={s.sectionTitle}>{"Hobby's"}</Text>
      <View style={s.expList}>
        {ResumeData.hobbies.map((h, i) => <HobbyItem key={i} hobby={h} />)}
      </View>
    </View>
  )
}

function ExperienceSection({ experiences, title = 'Experience' }: { experiences: Experience[]; title?: string }) {
  return (
    <View>
      <Text style={s.sectionTitle}>{title}</Text>
      <View style={s.expList}>
        {experiences.map((e, i) => <ExpItem key={i} exp={e} />)}
      </View>
    </View>
  )
}

function SkillsSection() {
  const skills = ResumeData.skills.programming
  return (
    <View>
      <Text style={s.sectionTitle}>Skills</Text>
      <View style={s.skillsWrap}>
        {skills.map((skill, i) => (
          <Text
            key={i}
            style={[
              s.skillBadge,
              i === 0
                ? { marginLeft: 'auto' }
                : i === skills.length - 1
                ? { marginRight: 'auto' }
                : { flexGrow: 1, textAlign: 'center' },
            ]}
          >
            {skill}
          </Text>
        ))}
      </View>
    </View>
  )
}

function LanguagesSection() {
  return (
    <View>
      <Text style={[s.sectionTitle, { marginBottom: 10 }]}>Languages</Text>
      {ResumeData.skills.languages.map((lang, i) => (
        <View key={i} style={s.langItem}>
          <Text style={s.langName}>{lang.title}</Text>
          <View style={s.langDots}>
            {[1, 2, 3, 4, 5].map((level) => (
              <View
                key={level}
                style={[s.langDot, { backgroundColor: level <= lang.level ? THEME : THEME_LIGHT }]}
              />
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}

// ── Document ──────────────────────────────────────────────

export interface ResumePDFProps {
  imageUrl?: string
}

export default function ResumePDF({ imageUrl }: ResumePDFProps) {
  return (
    <Document>
      {/* Page 1 */}
      <Page size="A4" style={s.page}>
        <PDFHeader profile={ResumeData.profile} image={imageUrl} />
        <View style={s.content}>
          <View style={s.leftPanel}>
            <ContactSection />
            <EducationSection />
            <CertificationSection />
          </View>
          <View style={s.rightPanel}>
            <ProfileSection />
            <HobbySection />
            <ExperienceSection experiences={ResumeData.experiences.slice(0, 3)} />
          </View>
        </View>
        <PDFFooter pageNumber={1} />
      </Page>

      {/* Page 2 */}
      <Page size="A4" style={s.page}>
        <PDFHeader profile={ResumeData.profile} />
        <View style={s.content}>
          <View style={s.leftPanel}>
            <SkillsSection />
            <LanguagesSection />
          </View>
          <View style={s.rightPanel}>
            <ExperienceSection experiences={ResumeData.experiences.slice(3, 9)} />
          </View>
        </View>
        <PDFFooter pageNumber={2} />
      </Page>

      {/* Page 3 */}
      <Page size="A4" style={s.page}>
        <PDFHeader profile={ResumeData.profile} />
        <View style={s.content}>
          <View style={s.centerPanel}>
            <ExperienceSection experiences={ResumeData.experiences.slice(9)} />
          </View>
        </View>
        <PDFFooter pageNumber={3} />
      </Page>
    </Document>
  )
}
