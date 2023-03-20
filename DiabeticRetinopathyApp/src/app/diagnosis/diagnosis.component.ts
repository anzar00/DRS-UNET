import { Component } from '@angular/core';
import { ImageUploadComponent } from '../image-upload/image-upload.component';
import { PatientDetailsComponent } from '../patient-details/patient-details.component';
import { DiagnosisService } from '../services/diagnosis.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent {
  constructor(private diagnosisService: DiagnosisService) {}
  submitDiagnosis() {
    const fundusImage = this.imageUploadComponent.getImage();
    const patientDetails = this.patientDetailsComponent.getDetails();
  
    this.diagnosisService.getDiagnosis(fundusImage, patientDetails).subscribe((result) => {
      // Update the results component with the diagnosis result
    });
  }
  
}


