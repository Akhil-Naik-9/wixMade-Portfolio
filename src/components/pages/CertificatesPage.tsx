import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, ExternalLink, Building, Hash, CheckCircle } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Certificates } from '@/entities';
import { Image } from '@/components/ui/image';

export default function CertificatesPage() {
  const [certificates, setCertificates] = useState<Certificates[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCertificates();
  }, []);

  const loadCertificates = async () => {
    try {
      setIsLoading(true);
      const { items } = await BaseCrudService.getAll<Certificates>('certificates');
      // Sort by date issued (newest first)
      const sortedCertificates = items.sort((a, b) => {
        const dateA = new Date(a.dateIssued || a._createdDate || 0);
        const dateB = new Date(b.dateIssued || b._createdDate || 0);
        return dateB.getTime() - dateA.getTime();
      });
      setCertificates(sortedCertificates);
    } catch (error) {
      console.error('Error loading certificates:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    });
  };

  const getYearFromDate = (date: Date | string | undefined) => {
    if (!date) return '';
    return new Date(date).getFullYear().toString();
  };

  // Group certificates by year
  const certificatesByYear = certificates.reduce((acc, cert) => {
    const year = getYearFromDate(cert.dateIssued || cert._createdDate);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(cert);
    return acc;
  }, {} as Record<string, Certificates[]>);

  const years = Object.keys(certificatesByYear).sort((a, b) => parseInt(b) - parseInt(a));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-paragraph text-foreground/70">Loading certificates...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Professional <span className="text-primary">Certificates</span>
          </h1>
          <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
            Industry-recognized certifications and credentials that validate my expertise 
            in various technologies and development practices.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="glassmorphism-card text-center block-hover-border">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-2 text-secondary">
              {certificates.length}
            </h3>
            <p className="font-paragraph text-secondary">Total Certificates</p>
          </div>
          
          <div className="glassmorphism-card text-center block-hover-border">
            <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-4">
              <Building className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-secondary mb-2">
              {Array.from(new Set(certificates.map(c => c.issuingOrganization).filter(Boolean))).length}
            </h3>
            <p className="font-paragraph text-secondary">Issuing Organizations</p>
          </div>
          
          <div className="glassmorphism-card text-center block-hover-border">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-2">
              {certificates.filter(c => c.certificateUrl).length}
            </h3>
            <p className="font-paragraph text-secondary-foreground">Verified Online</p>
          </div>
        </motion.div>

        {/* Certificates by Year */}
        {years.map((year, yearIndex) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: yearIndex * 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-heading text-3xl font-bold text-primary">{year}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
              <span className="font-paragraph text-sm text-foreground/50">
                {certificatesByYear[year].length} certificate{certificatesByYear[year].length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificatesByYear[year].map((certificate, index) => (
                <motion.div
                  key={certificate._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (yearIndex * 0.1) + (index * 0.05) }}
                  className="glassmorphism-card group hover:shadow-md transition-all duration-300 block-hover-border"
                >
                  {/* Certificate Image */}
                  {certificate.certificateImage && (
                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <Image
                        src={certificate.certificateImage}
                        alt={certificate.certificateName || 'Certificate'}
                        width={400}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 right-3">
                        <div className="bg-primary text-primary-foreground px-2 py-1 rounded-full">
                          <Award className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Certificate Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                        {certificate.certificateName}
                      </h3>
                      {certificate.issuingOrganization && (
                        <p className="font-paragraph text-secondary font-medium mb-3">
                          {certificate.issuingOrganization}
                        </p>
                      )}
                      {certificate.description && (
                        <p className="font-paragraph text-sm text-foreground/70 line-clamp-3">
                          {certificate.description}
                        </p>
                      )}
                    </div>

                    {/* Certificate Details */}
                    <div className="space-y-3">
                      {certificate.dateIssued && (
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-foreground/50" />
                          <span className="font-paragraph text-sm text-foreground/70">
                            Issued: {formatDate(certificate.dateIssued)}
                          </span>
                        </div>
                      )}
                      
                      {certificate.credentialId && (
                        <div className="flex items-center gap-3">
                          <Hash className="w-4 h-4 text-foreground/50" />
                          <span className="font-paragraph text-sm text-foreground/70 font-mono">
                            ID: {certificate.credentialId}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Certificate Link */}
                    {certificate.certificateUrl && (
                      <div className="pt-4 border-t border-foreground/10">
                        <a
                          href={certificate.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-paragraph text-sm font-medium hover:bg-primary/90 transition-colors w-full justify-center"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Certificate
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Empty State */}
        {certificates.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="p-4 bg-foreground/5 rounded-full w-fit mx-auto mb-6">
              <Award className="w-8 h-8 text-foreground/50" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-4">No Certificates Found</h3>
            <p className="font-paragraph text-foreground/70">
              Professional certificates will be displayed here once available.
            </p>
          </motion.div>
        )}
      </section>
      {/* Certification Philosophy */}
      <section className="py-20 px-4 max-w-[120rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism-card text-center max-w-4xl mx-auto block-hover-border"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-secondary">
            Commitment to <span className="text-secondary">Excellence</span>
          </h2>
          <p className="font-paragraph text-lg mb-8 leading-relaxed text-secondary">
            Every certificate shows my commitment to learning and growing as a developer. 
            I earn these credentials to prove my skills and stay updated with new technologies.
          </p>
          <p className="font-paragraph text-lg leading-relaxed text-secondary">
            These achievements show that I'm serious about improving my abilities and 
            meeting industry standards.
          </p>
        </motion.div>
      </section>
    </div>
  );
}