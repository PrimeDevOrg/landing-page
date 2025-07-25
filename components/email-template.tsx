
interface EmailTemplateProps {
  name: string
  mail: string
  whatsapp: string
  empresa?: string
  cargo?: string
  tamanhoEmpresa?: string
  servico: string
  investimento: string
  prazo: string
  detalhes: string
}

export function EmailTemplate({
  name,
  mail,
  whatsapp,
  empresa,
  cargo,
  tamanhoEmpresa,
  servico,
  investimento,
  prazo,
  detalhes,
}: EmailTemplateProps) {
  // Mapear valores para textos mais legíveis
  const getServicoLabel = (value: string) => {
    const services = {
      'desenvolvimento-web': 'Desenvolvimento Web',
      'aplicativo-mobile': 'Aplicativo Mobile',
      'ecommerce': 'E-commerce',
      'sistema-personalizado': 'Sistema Personalizado',
      'consultoria': 'Consultoria em Tecnologia',
      'manutencao': 'Manutenção de Sistema',
      'outros': 'Outros'
    }
    return services[value as keyof typeof services] || value
  }

  const getInvestimentoLabel = (value: string) => {
    const investments = {
      'ate-5k': 'Até R$ 5.000',
      '5k-15k': 'R$ 5.000 - R$ 15.000',
      '15k-30k': 'R$ 15.000 - R$ 30.000',
      '30k-50k': 'R$ 30.000 - R$ 50.000',
      'acima-50k': 'Acima de R$ 50.000'
    }
    return investments[value as keyof typeof investments] || value
  }

  const getPrazoLabel = (value: string) => {
    const deadlines = {
      'urgente': 'Urgente (até 1 mês)',
      '1-3-meses': '1 a 3 meses',
      '3-6-meses': '3 a 6 meses',
      '6-12-meses': '6 a 12 meses',
      'acima-12-meses': 'Mais de 12 meses'
    }
    return deadlines[value as keyof typeof deadlines] || value
  }

  const getTamanhoEmpresaLabel = (value?: string) => {
    if (!value) return 'Não informado'
    const sizes = {
      'microempresa': 'Microempresa (até 9 funcionários)',
      'pequena': 'Pequena empresa (10-49 funcionários)',
      'media': 'Média empresa (50-249 funcionários)',
      'grande': 'Grande empresa (250+ funcionários)'
    }
    return sizes[value as keyof typeof sizes] || value
  }

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '600px', 
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#1e40af',
        color: 'white',
        padding: '20px',
        borderRadius: '8px 8px 0 0',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: '0', fontSize: '24px' }}>
          Nova Solicitação de Orçamento
        </h1>
        <p style={{ margin: '10px 0 0 0', opacity: '0.9' }}>
          Recebido em {new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR')}
        </p>
      </div>

      {/* Dados do Cliente */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderLeft: '4px solid #1e40af'
      }}>
        <h2 style={{ 
          color: '#1e40af', 
          marginTop: '0',
          fontSize: '20px',
          borderBottom: '2px solid #e5e7eb',
          paddingBottom: '10px'
        }}>
          📋 Dados do Cliente
        </h2>
        
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#374151' }}>Nome:</strong>
          <span style={{ marginLeft: '10px', color: '#6b7280' }}>{name}</span>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#374151' }}>Email:</strong>
          <span style={{ marginLeft: '10px', color: '#6b7280' }}>
            <a href={`mailto:${mail}`} style={{ color: '#1e40af', textDecoration: 'none' }}>
              {mail}
            </a>
          </span>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#374151' }}>WhatsApp:</strong>
          <span style={{ marginLeft: '10px', color: '#6b7280' }}>
            <a href={`https://wa.me/55${whatsapp.replace(/\D/g, '')}`} style={{ color: '#1e40af', textDecoration: 'none' }}>
              {whatsapp}
            </a>
          </span>
        </div>

        {empresa && (
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#374151' }}>Empresa:</strong>
            <span style={{ marginLeft: '10px', color: '#6b7280' }}>{empresa}</span>
          </div>
        )}

        {cargo && (
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#374151' }}>Cargo:</strong>
            <span style={{ marginLeft: '10px', color: '#6b7280' }}>{cargo}</span>
          </div>
        )}

        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#374151' }}>Tamanho da Empresa:</strong>
          <span style={{ marginLeft: '10px', color: '#6b7280' }}>
            {getTamanhoEmpresaLabel(tamanhoEmpresa)}
          </span>
        </div>
      </div>

      {/* Detalhes do Projeto */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderLeft: '4px solid #10b981',
        marginTop: '10px'
      }}>
        <h2 style={{ 
          color: '#10b981', 
          marginTop: '0',
          fontSize: '20px',
          borderBottom: '2px solid #e5e7eb',
          paddingBottom: '10px'
        }}>
          🚀 Detalhes do Projeto
        </h2>

        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#374151' }}>Serviço Solicitado:</strong>
          <span style={{ 
            marginLeft: '10px', 
            color: '#6b7280',
            backgroundColor: '#dbeafe',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '14px'
          }}>
            {getServicoLabel(servico)}
          </span>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#374151' }}>Investimento Pretendido:</strong>
          <span style={{ 
            marginLeft: '10px', 
            color: '#6b7280',
            backgroundColor: '#dcfce7',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '14px'
          }}>
            {getInvestimentoLabel(investimento)}
          </span>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <strong style={{ color: '#374151' }}>Prazo Desejado:</strong>
          <span style={{ 
            marginLeft: '10px', 
            color: '#6b7280',
            backgroundColor: '#fef3c7',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '14px'
          }}>
            {getPrazoLabel(prazo)}
          </span>
        </div>

        <div style={{ marginTop: '20px' }}>
          <strong style={{ color: '#374151' }}>Detalhes do Projeto:</strong>
          <div style={{
            marginTop: '10px',
            padding: '15px',
            backgroundColor: '#f9fafb',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            lineHeight: '1.6',
            color: '#4b5563'
          }}>
            {detalhes}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#374151',
        color: 'white',
        padding: '15px',
        borderRadius: '0 0 8px 8px',
        textAlign: 'center',
        fontSize: '14px'
      }}>
        <p style={{ margin: '0' }}>
          💼 Esta solicitação foi enviada através do formulário de contato do site
        </p>
        <p style={{ margin: '5px 0 0 0', opacity: '0.8' }}>
          Responda o mais breve possível para não perder essa oportunidade!
        </p>
      </div>
    </div>
  )
}
