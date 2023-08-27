import CharacterForm from '@/components/charachterForm';
import Button from '@/components/generic/button';
import { CharacterSheetT } from '@/schemas/sheet';
import CharacterButton from '@/components/dashboard/charachterButton';
import CampaignForm from '@/components/campaignForm';
import { CampaignT } from '@/schemas/campaign';
import CampaignButton from '@/components/dashboard/campaignButton';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();
  const [showSheetForm, setShowSheetForm] = useState(false);
  const [charachters, setCharachters] = useState<CharacterSheetT[]>([]);
  const [selectedCharacter, setSelectedCharacter] =
    useState<CharacterSheetT | null>(null);

  const [showCampaignForm, setShowCampaignForm] = useState(false);
  const [campaigns, setCampaigns] = useState<CampaignT[]>([]);
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignT | null>(
    null,
  );

  useEffect(() => {
    if (session) {
      fetch(`/api/campaigns?id=${session.user.id}`)
        .then((response) => response.json())
        .then((data) => setCampaigns(data));
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      fetch(`/api/sheets?id=${session.user.id}`)
        .then((response) => response.json())
        .then((data) => setCharachters(data));
    }
  }, [session]);

  return (
    <div className="p-4 text-xl font-bold">
      <Button
        className="bg-green-500 hover:bg-green-700 "
        label="Create New Character Sheet"
        onClick={() => setShowSheetForm(true)}
      />
      <div>
        <h2>Your Character Sheets:</h2>
        {charachters.map((sheet) => (
          <CharacterButton
            key={sheet._id}
            name={sheet.name}
            highConcept={sheet.aspects[0]}
            imageUrl={sheet.icon}
            onClick={() => setSelectedCharacter(sheet)}
          />
        ))}
      </div>
      <Button
        className="bg-blue-500 hover:bg-blue-700 mt-4"
        label="Create New Campaign"
        onClick={() => setShowCampaignForm(true)}
      />
      <div>
        <h2>Your Campaigns:</h2>
        {campaigns.map((campaign) => (
          <CampaignButton
            key={campaign._id}
            name={campaign.name}
            imageUrl={campaign.icon}
            onClick={() => setSelectedCampaign(campaign)}
          />
        ))}
      </div>

      {selectedCampaign && (
        <CampaignForm
          key={selectedCampaign._id}
          initialCampaign={selectedCampaign}
          state="edit"
          setCampaigns={setCampaigns}
          onClose={() => setSelectedCampaign(null)}
        />
      )}

      {showCampaignForm && (
        <CampaignForm
          onClose={() => setShowCampaignForm(false)}
          setCampaigns={setCampaigns}
        />
      )}

      {selectedCharacter && (
        <CharacterForm
          key={selectedCharacter._id}
          initialSheet={selectedCharacter}
          state="edit"
          setCharachters={setCharachters}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
      {showSheetForm && (
        <CharacterForm
          onClose={() => setShowSheetForm(false)}
          setCharachters={setCharachters}
        />
      )}
    </div>
  );
}
