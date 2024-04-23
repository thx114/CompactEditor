using Colossal;
using Colossal.IO.AssetDatabase;
using Game.Modding;
using Game.Settings;
using Game.UI;
using Game.UI.Widgets;
using System.Collections.Generic;

namespace CompactEditor
{
    [FileLocation(nameof(CompactEditor))]
    [SettingsUIGroupOrder(kToggleGroup)]
    [SettingsUIShowGroupName(kToggleGroup)]
    public class Setting : ModSetting
    {
        public const string kSection = "Main";

        //public const string kButtonGroup = "Button";
        public const string kToggleGroup = "Toggle";
        //public const string kSliderGroup = "Slider";
        //public const string kDropdownGroup = "Dropdown";

        public Setting(IMod mod) : base(mod)
        {

        }

        //[SettingsUISection(kSection, kButtonGroup)]
        //public bool Button { set { Mod.log.Info("Button clicked"); } }

        //[SettingsUIButton]
        //[SettingsUIConfirmation]
        //[SettingsUISection(kSection, kButtonGroup)]
        //public bool ButtonWithConfirmation { set { Mod.log.Info("ButtonWithConfirmation clicked"); } }

        [SettingsUISection(kSection, kToggleGroup)]
        public bool Toggle { get; set; }

        //[SettingsUISlider(min = 0, max = 100, step = 1, scalarMultiplier = 1, unit = Unit.kDataMegabytes)]
        //[SettingsUISection(kSection, kSliderGroup)]
        //public int IntSlider { get; set; }

        //[SettingsUIDropdown(typeof(Setting), nameof(GetIntDropdownItems))]
        //[SettingsUISection(kSection, kDropdownGroup)]
        //public int IntDropdown { get; set; }

        //[SettingsUISection(kSection, kDropdownGroup)]
        //public SomeEnum EnumDropdown { get; set; } = SomeEnum.Value1;

        //public DropdownItem<int>[] GetIntDropdownItems()
        //{
        //    var items = new List<DropdownItem<int>>();
        //     for (var i = 0; i < 3; i += 1)
        //    {
        //       items.Add(new DropdownItem<int>()
        //        {
        //            value = i,
        //            displayName = i.ToString(),
        //        });
        //    }
        //    return items.ToArray();
        //}

        public override void SetDefaults()
        {
            throw new System.NotImplementedException();
        }

        //public enum SomeEnum
        //{
        //    Value1,
        //    Value2,
        //    Value3,
        //}
    }

    public class LocaleEN : IDictionarySource
    {
        private readonly Setting m_Setting;
        public LocaleEN(Setting setting)
        {
            m_Setting = setting;
        }
        public IEnumerable<KeyValuePair<string, string>> ReadEntries(IList<IDictionaryEntryError> errors, Dictionary<string, int> indexCounts)
        {
            return new Dictionary<string, string>
            {
                { m_Setting.GetSettingsLocaleID(), "Mod settings sample" },
                { m_Setting.GetOptionTabLocaleID(Setting.kSection), "Main" },

                { m_Setting.GetOptionGroupLocaleID(Setting.kToggleGroup), "Toggle" },

                { m_Setting.GetOptionLabelLocaleID(nameof(Setting.Toggle)), "Toggle" },
                { m_Setting.GetOptionDescLocaleID(nameof(Setting.Toggle)), $"Use bool property with setter and getter to get toggable option" },


            };
        }

        public void Unload()
        {

        }
    }
}
