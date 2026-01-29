import React, { useEffect, useState } from 'react';
import { Modal, Button } from '@openedx/paragon';

export default function PopupOnDashboard() {
  const [open, setOpen] = useState(false);

  // Hacemos accesible una función global para abrir el modal
  useEffect(() => {
    console.log("PopupOnDashboard cargado");

    window.openCustomDashboardModal = () => {
      console.log("Abriendo modal desde menú");
      setOpen(true);
    };

    return () => {
      delete window.openCustomDashboardModal;
    };
  }, []);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title="Notificación"
    >
      <p>Este es un mensaje personalizado.</p>
      <Button onClick={() => setOpen(false)}>Cerrar</Button>
    </Modal>
  );
}
