import { Column, Img, Row, Section } from '../components';

export interface TemplateDocumentImageProps {
  assetBaseUrl: string;
  className?: string;
}

export const TemplateDocumentImage = ({ className }: TemplateDocumentImageProps) => {
  return (
    <Section className={className}>
      <Row className="table-fixed">
        <Column />

        <Column>
          <Img className="mx-auto h-42" src="https://static.nyxsentinel.com/website/emblem.png" alt="NyxSentinel" />
        </Column>

        <Column />
      </Row>
    </Section>
  );
};

export default TemplateDocumentImage;
