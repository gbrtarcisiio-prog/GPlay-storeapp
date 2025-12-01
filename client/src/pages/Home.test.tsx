import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "./Home";

describe("Home - Play Store App Page", () => {
  beforeEach(() => {
    // Reset window size before each test
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 375,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 812,
    });
  });

  it("should render the mobile view when viewport is mobile-sized", () => {
    render(<Home />);
    
    // Check header elements
    expect(screen.getByText("StoreApp")).toBeInTheDocument();
    
    // Check app info
    expect(screen.getByText("Meu Aplicativo")).toBeInTheDocument();
    expect(screen.getByText("App Oficial da Empresa")).toBeInTheDocument();
    expect(screen.getByText("4.8")).toBeInTheDocument();
    expect(screen.getByText("12 mil+")).toBeInTheDocument();
  });

  it("should display the install button", () => {
    render(<Home />);
    
    const installButton = screen.getByRole("button", { name: /Instalar/i });
    expect(installButton).toBeInTheDocument();
  });

  it("should display secondary action buttons", () => {
    render(<Home />);
    
    expect(screen.getByRole("button", { name: /Compartilhar/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Desejos/i })).toBeInTheDocument();
  });

  it("should display bottom navigation", () => {
    render(<Home />);
    
    expect(screen.getByText("Jogos")).toBeInTheDocument();
    expect(screen.getByText("Apps")).toBeInTheDocument();
    expect(screen.getByText("Livros")).toBeInTheDocument();
    expect(screen.getByText("Crianças")).toBeInTheDocument();
  });

  it("should display screenshots carousel", () => {
    render(<Home />);
    
    expect(screen.getByText("Screenshot 1")).toBeInTheDocument();
    expect(screen.getByText("Screenshot 2")).toBeInTheDocument();
    expect(screen.getByText("Screenshot 3")).toBeInTheDocument();
    expect(screen.getByText("Screenshot 4")).toBeInTheDocument();
  });

  it("should display about section", () => {
    render(<Home />);
    
    expect(screen.getByText("Sobre este app")).toBeInTheDocument();
    expect(screen.getByText(/Este é um aplicativo de exemplo/i)).toBeInTheDocument();
  });

  it("should display data security section", () => {
    render(<Home />);
    
    expect(screen.getByText("Segurança dos dados")).toBeInTheDocument();
    expect(screen.getByText("Os dados não são compartilhados com terceiros")).toBeInTheDocument();
  });

  it("should trigger download when install button is clicked", () => {
    // Mock window.location.href
    delete (window as any).location;
    window.location = { href: "" } as any;
    
    render(<Home />);
    
    const installButton = screen.getByRole("button", { name: /Instalar/i });
    fireEvent.click(installButton);
    
    expect(window.location.href).toBe("https://meusite.com/app.apk");
  });

  it("should show desktop message when viewport width exceeds 1024px", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1280,
    });
    
    render(<Home />);
    
    expect(screen.getByText("Apenas para dispositivos móveis")).toBeInTheDocument();
    expect(screen.getByText(/Esta página foi otimizada exclusivamente para smartphones e tablets em modo retrato/i)).toBeInTheDocument();
  });

  it("should display device compatibility message", () => {
    render(<Home />);
    
    expect(screen.getByText("Este app está disponível para seu dispositivo")).toBeInTheDocument();
  });

  it("should have correct rating display", () => {
    render(<Home />);
    
    expect(screen.getByText("4.8")).toBeInTheDocument();
    expect(screen.getByText("12+")).toBeInTheDocument();
  });

  it("should display content tags", () => {
    render(<Home />);
    
    expect(screen.getByText(/Contém anúncios · Compras no app/i)).toBeInTheDocument();
  });
});
