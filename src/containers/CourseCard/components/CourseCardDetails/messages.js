import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  accessExpired: {
    id: 'learner-dash.courseCard.CourseCardDetails.accessExpired',
    description: 'Mensaje de expiración de acceso al curso en la tarjeta cuando el acceso ha expirado.',
    defaultMessage: 'Acceso expirado {accessExpirationDate}',
  },
  accessExpires: {
    id: 'learner-dash.courseCard.CourseCardDetails.accessExpires',
    description: 'Mensaje de fecha de expiración de acceso al curso en la tarjeta.',
    defaultMessage: 'El acceso expira el {accessExpirationDate}',
  },
  courseEnded: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseEnded',
    description: 'Mensaje de curso finalizado en la tarjeta.',
    defaultMessage: 'El curso finalizó el {endDate}',
  },
  courseEnds: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseEnds',
    description: 'Mensaje de fecha de fin del curso en la tarjeta.',
    defaultMessage: 'El curso finaliza el {endDate}',
  },
  courseStarts: {
    id: 'learner-dash.courseCard.CourseCardDetails.courseStarts',
    description: 'Mensaje de fecha de inicio del curso en la tarjeta.',
    defaultMessage: 'El curso inicia el {startDate}',
  },
  unknownProviderName: {
    id: 'learner-dash.courseCard.CourseCardDetails.unknownProviderName',
    description: 'Nombre del proveedor cuando se desconoce.',
    defaultMessage: 'Desconocido',
  },
  changeOrLeaveSessionButton: {
    id: 'learner-dash.courseCard.CourseCardDetails.changeOrLeaveSessionButton',
    description: 'Botón para cambiar o abandonar la sesión del curso con derecho adquirido.',
    defaultMessage: 'Cambiar o abandonar sesión',
  },

});

export default messages;
