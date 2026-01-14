const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {currentYear} Mestre dos Drinks. Todos os Direitos Reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
