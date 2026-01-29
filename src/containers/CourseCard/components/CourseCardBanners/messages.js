import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
auditAccessExpired: {
  id: 'learner-dash.courseCard.banners.auditAccessExpired',
  description: 'Mensaje del banner cuando expira el acceso en modalidad de auditoría',
  defaultMessage: 'Tu acceso de auditoría a este curso ha expirado.',
},
upgradeToAccess: {
  id: 'learner-dash.courseCard.banners.upgradeToAccess',
  description: 'Mensaje para que los usuarios en auditoría que aún pueden mejorar accedan al curso',
  defaultMessage: 'Mejora ahora para acceder nuevamente al curso.',
},
findAnotherCourse: {
  id: 'learner-dash.courseCard.banners.findAnotherCourse',
  description: 'Acción para llevar al usuario a explorar otros cursos',
  defaultMessage: 'Encontrar otro curso',
},
upgradeDeadlinePassed: {
  id: 'learner-dash.courseCard.banners.upgradeDeadlinePassed',
  description: 'Mensaje cuando ya pasó la fecha límite para mejorar',
  defaultMessage: 'La fecha límite para mejorar tu modalidad en este curso ha pasado. Para mejorar, inscríbete en una sesión futura.',
},
exploreCourseDetails: {
  id: 'learner-dash.courseCard.banners.exploreCourseDetails',
  description: 'Acción para ver los detalles del curso',
  defaultMessage: 'Explorar detalles del curso.',
},
certRestricted: {
  id: 'learner-dash.courseCard.banners.certificateRestricted',
  description: 'Mensaje de advertencia cuando el certificado está restringido',
  defaultMessage: 'Tu Certificado de Logro está retenido mientras se confirma que su emisión cumple con los embargos estrictos de EE. UU. sobre Irán, Cuba, Siria y Sudán. Si crees que nuestro sistema te identificó por error como relacionado con alguno de esos países, por favor contáctanos en {supportEmail}.',
},
certRestrictedNoEmail: {
  id: 'learner-dash.courseCard.banners.certificateRestrictedNoEmail',
  description: 'Mensaje de advertencia cuando el certificado está restringido (sin email)',
  defaultMessage: 'Tu Certificado de Logro está retenido mientras se confirma que su emisión cumple con los embargos estrictos de EE. UU. sobre Irán, Cuba, Siria y Sudán. Si crees que esto es un error, por favor háznoslo saber.',
},
certRefundContactBilling: {
  id: 'learner-dash.courseCard.banners.certificateRefundContactBilling',
  description: 'Mensaje para contactar a facturación para solicitar reembolso del certificado',
  defaultMessage: 'Si deseas un reembolso de tu Certificado de Logro, por favor contacta con nuestro departamento de facturación en {billingEmail}',
},
certRefundContactBillingNoEmail: {
  id: 'learner-dash.courseCard.banners.certificateRefundContactBillingNoEmail',
  description: 'Mensaje para solicitar reembolso del certificado (sin email)',
  defaultMessage: 'Si deseas un reembolso de tu Certificado de Logro, por favor contáctanos.',
},
passingGrade: {
  id: 'learner-dash.courseCard.banners.passingGrade',
  description: 'Mensaje sobre la calificación mínima para aprobar el curso',
  defaultMessage: 'Calificación requerida para aprobar el curso: {minPassingGrade}%‎',
},
notEligibleForCert: {
  id: 'learner-dash.courseCard.banners.notEligibleForCert',
  description: 'Mensaje indicando que el usuario no es elegible para certificado',
  defaultMessage: 'No eres elegible para un certificado.',
},
viewGrades: {
  id: 'learner-dash.courseCard.banners.viewGrades',
  description: 'Texto del enlace para ver calificaciones',
  defaultMessage: 'Ver calificaciones.',
},
certReady: {
  id: 'learner-dash.courseCard.banners.certReady',
  description: 'Mensaje cuando el certificado está listo',
  defaultMessage: 'Felicidades. Tu certificado está listo.',
},
viewCertificate: {
  id: 'learner-dash.courseCard.banners.viewCertificate',
  description: 'Texto del enlace para ver el certificado',
  defaultMessage: 'Ver certificado.',
},
certMinGrade: {
  id: 'learner-dash.courseCard.banners.certMinGrade',
  description: 'Mensaje sobre la calificación mínima para obtener certificado',
  defaultMessage: 'Calificación requerida para obtener certificado: {minPassingGrade}%‎',
},
downloadCertificate: {
  id: 'learner-dash.courseCard.banners.downloadCertificate',
  description: 'Texto del enlace para descargar el certificado',
  defaultMessage: 'Descargar certificado.',
},
gradeAndCertReadyAfter: {
  id: 'learner-dash.courseCard.banners.gradseAndCertReadyAfter',
  description: 'Mensaje indicando cuándo estarán listas las calificaciones y el certificado',
  defaultMessage: 'Tus calificaciones y certificado estarán disponibles después de {availableDate}.',
},
entitlementUnavailable: {
  id: 'learner-dash.courseCard.banners.entitlementUnavailable',
  description: 'Mensaje cuando no hay sesiones disponibles para un curso con entitlement',
  defaultMessage: 'No hay sesiones disponibles en este momento. El equipo del curso creará nuevas sesiones pronto. Si no aparece ninguna sesión, por favor contacta a {emailLink} para más información.',
},
entitlementExpiringSoon: {
  id: 'learner-dash.courseCard.banners.entitlementExpiringSoon',
  description: 'Mensaje cuando el entitlement está por expirar',
  defaultMessage: 'Debes {selectSessionButton} antes de {changeDeadline} para acceder al curso.',
},
entitlementExpired: {
  id: 'learner-dash.courseCard.banners.entitlementExpired',
  description: 'Mensaje cuando el entitlement ya expiró',
  defaultMessage: 'Ya no puedes cambiar de sesión.',
},
selectSession: {
  id: 'learner-dash.courseCard.banners.selectSession',
  description: 'Texto del enlace para seleccionar una sesión',
  defaultMessage: 'seleccionar una sesión',
},
prerequisitesNotMet: {
  id: 'learner-dash.courseCard.banners.prerequisitesNotMet',
  description: 'Mensaje cuando el usuario no cumple los prerrequisitos',
  defaultMessage: 'No puedes acceder a este curso todavía porque no has cumplido con los prerrequisitos.',
},
courseHasNotStarted: {
  id: 'learner-dash.courseCard.banners.courseHasNotStarted',
  description: 'Mensaje cuando el curso aún no empieza',
  defaultMessage: 'No puedes acceder a este curso todavía porque aún no ha comenzado. El curso iniciará el {startDate}.',
},

});

export default messages;
